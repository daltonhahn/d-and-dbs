import requests
import json
import csv

stop_flag = False 

monster_name = []

response = requests.get("https://api.open5e.com/monsters")
while not stop_flag:
    for item in response.json()["results"]:

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/monsters.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(monster_name)):
        row = [index ]

        writer.writerow(row)
