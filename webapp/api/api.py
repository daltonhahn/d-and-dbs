import time
import mysql.connector
from dotenv import load_dotenv
import os
from os.path import join, dirname
from flask import Flask

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

def characters_table(params):
    attrs = []
    vals = []
    for index,p in enumerate(params):
        a = (p.split("=")[0])
        if a == "lvl":
            attrs.append("character_lvl")
        elif a == "id":
            attrs.append("character_ID")
        else:
            attrs.append("character_name")

        temp_val = p.split("=")[1]
        if temp_val != "":
            if index == 0:
                vals.append("character_ID = " + "'" + str(temp_val) + "'")
            elif index == 1:
                vals.append("character_lvl = " + "'" + str(temp_val) + "'")
            elif index == 2:
                vals.append("character_name = " + "'" + str(temp_val) + "'")

    return (attrs,"characters",vals)

def parse_conds(conds):
    p_conds = ""
    for index,c in enumerate(conds):
        if index != len(conds)-1:
            p_conds = p_conds + c + " AND "
        else:
            p_conds = p_conds + c
    return p_conds

def parse_query(q_string):
    table_queries = q_string.split("%")
    lookup = []
    for t in table_queries:
        params = t.split("&")
        if params[0] == "characters":
            lookup.append(characters_table(params[1:]))

    return lookup

def gen_output(result_list):
    output = [] 
    for item in result_list:
        output.append(item)
        
    return output

def markdown_table(header,results):
    mark_string = "|"
    for item in header.split(','):
        mark_string = mark_string + item + "|"
    mark_string = mark_string + "\n"
    mark_string = mark_string + "|" + (" ----- |" *len(header.split(","))) + "\n"
    mark_string = mark_string + "|"
    for rec in results:
        for item in rec:
            mark_string = mark_string + " " + str(item) + " |"
        mark_string = mark_string + "\n"

    return mark_string


@app.route('/query/<query>')
def get_character(query=''):
    parsed_q = parse_query(query)
    mycursor = mydb.cursor(buffered=True)
    attrs = ""
    tables = ""
    conds = ""
    for colls in parsed_q:
        attrs = attrs + ",".join(colls[0])
        conds = parse_conds(colls[2])
        # Logic for conditions here

    tables = parsed_q[0][1]

    print(conds)

    # SPECIAL LOGIC FOR CONDITIONS

    if attrs == "" and conds == "":
        mycursor.execute("SELECT * FROM " + tables)
    elif attrs == "" and conds != "":
        mycursor.execute("SELECT * FROM " + tables + " WHERE " + conds )
    elif attrs != "" and conds == "":
        mycursor.execute("SELECT " + attrs + " FROM " + tables)
    else:
        mycursor.execute("SELECT " + attrs + " FROM " + tables + " WHERE " + conds )

    result = mycursor.fetchall()
    output = gen_output(result)
    output = markdown_table(attrs,output)
    return {'string': output}





