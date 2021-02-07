import requests
import json
import csv

stop_flag = False 

weapon_name = []
weapon_category = []
cost = []
weapon_damage = []
damage_type = []
weight = []
properties = []

response = requests.get("https://api.open5e.com/weapons")
while not stop_flag:
    for item in response.json()["results"]:
        weapon_name.append(item["name"])
        weapon_category.append(item["category"])
        cost.append(item["cost"])
        weapon_damage.append(item["damage_dice"])
        damage_type.append(item["damage_type"])
        weight.append(item["weight"])
        properties.append(item["properties"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/weapons.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(weapon_name)):
        row = [index, weapon_name[index], weapon_category[index], cost[index],
                weapon_damage[index], damage_type[index], weight[index], properties[index]]
        writer.writerow(row)
