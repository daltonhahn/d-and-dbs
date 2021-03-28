import requests
import json
import csv

stop_flag = False 

spell_names = []
spell_range = []
spell_mats = []
ritual = []
duration = []
concentration = []
cast_time = []
spell_level = []
spell_school = []
spell_classes = []

spell_desc = []
higher_level = []

response = requests.get("https://api.open5e.com/spells")
while not stop_flag:
    for spell in response.json()["results"]:
        spell_names.append(spell["name"])
        spell_range.append(spell["range"])
        spell_mats.append(spell["material"])
        ritual.append(spell["ritual"])
        duration.append(spell["duration"])
        concentration.append(spell["concentration"])
        cast_time.append(spell["casting_time"])
        spell_level.append(spell["level_int"])
        spell_school.append(spell["school"])
        spell_classes.append(spell["dnd_class"])

        spell_desc.append(spell["desc"])
        higher_level.append(spell["higher_level"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/spells.csv", "w", newline='\n') as f:
    writer = csv.writer(f)

    for index in range(len(spell_names)):
        row = [spell_names[index], spell_desc[index], spell_level[index], spell_school[index], spell_classes[index]]
        writer.writerow(row)
