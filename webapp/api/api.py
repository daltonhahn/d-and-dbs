import time
import mysql.connector
from dotenv import load_dotenv
import os
from os.path import join, dirname
from flask import Flask

load_dotenv("./.env")
app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/mark_test')
def test_markdown():
    mydb = mysql.connector.connect(
        host=os.environ.get("host"),
        user=os.environ.get("user"),
        password=os.environ.get("password"),
        database=os.environ.get("database"),
        charset=os.environ.get("charset"),
        port="3306"
    )

    mycursor = mydb.cursor(buffered=True)
    mycursor.execute("SELECT spell_name FROM spells")
    spells = mycursor
    spells = spells.fetchall()
    return {'string': ("# "+spells[0][0])}

