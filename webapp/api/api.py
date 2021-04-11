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

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/character/<query>')
def get_character(query):
    mycursor = mydb.cursor(buffered=True)
    # INSERT QUERY PARSING LOGIC HERE
    mycursor.execute("SELECT character_name FROM characters LIMIT 0,10")
    characters = mycursor.fetchall()
    return {'string': ("# "+characters[0][0])}
