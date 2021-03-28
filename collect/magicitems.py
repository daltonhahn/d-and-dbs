import requests
import json
import csv

stop_flag = False 


magic_name = []
magic_type = []
rarity = []
attunement = []

description = []


response = requests.get("https://api.open5e.com/magicitems")
while not stop_flag:
    for item in response.json()["results"]:
        magic_name.append(item["name"])
        magic_type.append(item["type"])
        rarity.append(item["rarity"])
        attunement.append(item["requires_attunement"])

        description.append(item["desc"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/magicitems.csv", "w", newline='\n') as f:
    writer = csv.writer(f)

    for index in range(len(magic_name)):
        row = [magic_name[index], description[index], magic_type[index], rarity[index]]
        writer.writerow(row)
