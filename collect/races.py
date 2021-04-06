import requests
import json
import csv

stop_flag = False 

race_name = []
race_desc = []
asi_desc = []
asi = []
age = []
alignment = []
size = []
speed = []
speed_desc = []
languages = []
vision = []
traits = []

response = requests.get("https://api.open5e.com/races")
while not stop_flag:
    for item in response.json()["results"]:
        race_name.append(item["name"])
        race_desc.append(item["desc"])
        asi_desc.append(item["asi_desc"])
        asi.append(item["asi"])
        age.append(item["age"])
        alignment.append(item["alignment"])
        size.append(item["size"])
        speed.append(item["speed"])
        speed_desc.append(item["speed_desc"])
        languages.append(item["languages"])
        vision.append(item["vision"])
        traits.append(item["traits"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/races.csv", "w", newline='\n') as f:
    writer = csv.writer(f)

    for index in range(len(race_name)):
        row = [index+1,race_name[index], race_desc[index], speed[index], languages[index]] 

        writer.writerow(row)
