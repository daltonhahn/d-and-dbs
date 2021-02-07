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
with open("../data/magicitems.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(magic_name)):
        row = [index, magic_name[index], magic_type[index], rarity[index], attunement[index]]
        writer.writerow(row)

with open("../data/magicitems-add-on.csv", "w", newline='') as f_add:
    add_writer = csv.writer(f_add)

    for index in range(len(magic_name)):
        row = [index,description[index]]
        add_writer.writerow(row)
