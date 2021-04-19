import time
import mysql.connector
from dotenv import load_dotenv
import os
from os.path import join, dirname
from flask import request,Flask
import json
import characters
import spells
import weapons
import races 
import classes 
import alignments 
import magicitems

load_dotenv("./.env")
mydb = mysql.connector.connect(
    host=os.environ.get("host"),
    user=os.environ.get("user"),
    password=os.environ.get("password"),
    database=os.environ.get("database"),
    charset=os.environ.get("charset"),
    port="3306"
)
app = Flask(__name__)

def replace_chars(result):
    new_result = []
    bad_chars = ["\n", "\r", "'", '"']
    for w in result:
        for i in bad_chars:
            w = str(w).replace(i,'')
        new_result.append(w)
    return tuple(new_result)

def join_conds(table_list,cond_list):
    c_string = ""
    if "characters" not in table_list:
        for t,cs in cond_list.items():
            for c in cs:
                c_string = c_string + t + "." + c + " AND "            
    else:
        for t,cs in cond_list.items():
            for c in cs:
                c_string = c_string + t + "." + c + " AND "            
        for tab in table_list:
            if tab != "characters":
                if t == "alignments":
                    c_string = c_string + "character_alignment.character_ID = characters.character_ID AND character_alignment.align_ID = alignments.align_ID AND "
                elif t == "classes":
                    c_string = c_string + "character_class.character_ID = characters.character_ID AND character_class.class_ID = classes.class_ID AND "
                elif t == "magicitems":
                    c_string = c_string + "character_magicitem.character_ID = characters.character_ID AND character_magicitem.item_ID = magicitems.item_ID AND "
                elif t == "races":
                    c_string = c_string + "character_race.character_ID = characters.character_ID AND character_race.race_ID = races.race_ID AND "
                elif t == "spells":
                    c_string = c_string + "character_spell.character_ID = characters.character_ID AND character_spell.spell_ID = spells.spell_ID AND "
                elif t =="weapons":
                    c_string = c_string + "character_weapon.character_ID = characters.character_ID AND character_weapon.weapon_ID = weapons.weapon_ID AND "
    return c_string[:-5]

def parse_conds(tables, queries):
    p_conds = {}
    for index,table in enumerate(tables):
        if table == "characters":
            p_conds["characters"] = (characters.parse(queries["char_query"]))
        elif table == "spells":
            p_conds["spells"] = (spells.parse(queries["spell_query"]))
        elif table == "weapons":
            p_conds["weapons"] = (weapons.parse(queries["weapon_query"]))
        elif table == "races":
            p_conds["races"] = (races.parse(queries["race_query"]))
        elif table == "classes":
            p_conds["classes"] = (classes.parse(queries["class_query"]))
        elif table == "alignments":
            p_conds["alignments"] = (alignments.parse(queries["alignment_query"]))
        elif table == "magicitems":
            p_conds["magicitems"] = (magicitems.parse(queries["item_query"]))

    joined = join_conds(tables, p_conds)
    return joined

def gen_output(result_list):
    output = [] 
    for item in result_list:
        output.append(replace_chars(item))
    return output

def table_join(table_obj):
    tables = []
    for table,value in table_obj.items():
        if (value == True):
            tables.append(table)
    if "characters" in tables:
        for t in tables:
            if t == "alignments":
                tables.append("character_alignment")
            elif t == "classes":
                tables.append("character_class")
            elif t == "magicitems":
                tables.append("character_magicitem")
            elif t == "races":
                tables.append("character_race")
            elif t == "spells":
                tables.append("character_spell")
            elif t == "weapons":
                tables.append("character_weapon")

    return tables


def get_headers(tables):
    mycursor = mydb.cursor(buffered=True)
    headers = list() 
    for i,t in enumerate(tables):
        mycursor.execute("DESC " + t)
        headers.append(mycursor.fetchall())
    cols = []
    for h in headers:
        for c in h:
            temp_dict = dict()
            temp_dict["Header"] = c[0]
            temp_dict["accessor"] = c[0]
            if not any(d["Header"] == c[0] for d in cols):
                cols.append(temp_dict)

    return cols

@app.route('/query', methods=["POST"])
def query():
    mycursor = mydb.cursor(buffered=True)
    request_data = request.get_json()
    tables = (table_join(request_data["data"]["tables"]))
    conds = parse_conds(tables, request_data["data"]["query"])

    if len(tables) == 0:
        return json.dumps({'string': "Bad Query"})
    elif conds == "":
        mycursor.execute("SELECT * FROM " + ",".join(tables))
    elif len(tables) > 0 and conds != "":
        mycursor.execute("SELECT * FROM " + ",".join(tables) + " WHERE " + conds)

    columns = get_headers(tables)
    result = mycursor.fetchall()
    output = gen_output(result)
    records = list()
    for row in output:
        temp_dict = dict(zip([d["Header"] for d in columns], row))

        records.append(temp_dict)
    data = {
            "columns": columns,
            "records": records
    }
    return json.dumps(data)


@app.route('/update', methods=["POST"])
def update():
    mycursor = mydb.cursor(buffered=True)
    request_data = request.get_json()
    if request_data["data"]["table"] == "" or request_data["data"]["query"] == "":
        return json.dumps({"status": "failure"})

    table = request_data["data"]["table"]
    mycursor.execute("DESC " + table)
    headers = mycursor.fetchall()
    cols = []
    for c in headers:
        if "_desc" not in c[0] and "_profieciency" not in c[0] and "item_type" not in c[0] and "_speed" not in c[0] and "_langs" not in c[0]:
            cols.append(c[0])

    vals = []
    if table == "spells":
        vals = spells.update_parse(request_data["data"]["query"])
    else:
        for k,v in request_data["data"]["query"].items():
            vals.append(v)

    v_string = ', '.join(f'"{w}"' for w in vals)
    c_string = ', '.join(cols)
    up_string = ""
    for i,c in enumerate(cols):
        if i != 0:
            up_string = up_string + str(cols[i]) + "=" + '"' + str(vals[i]) + '"'
            up_string = up_string + ", "

    print("INSERT INTO " + table + " (" + c_string + ") VALUES(" + v_string + ") ON DUPLICATE KEY UPDATE " + up_string[:-2])
    mycursor.execute("INSERT INTO " + table + " (" + c_string + ") VALUES(" + v_string + ") ON DUPLICATE KEY UPDATE " + up_string[:-2])

    return json.dumps({"status": "success"})

