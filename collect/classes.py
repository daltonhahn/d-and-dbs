import requests
import json
import csv

stop_flag = False 

class_name = []
class_desc = []
hit_die = []
hp_at_1 = []
hp_higher = []
armor_prof = []
weapon_prof = []
tool_prof = []
saving_prof = []
skills_prof = []
equipment = []
prof_table = []
spell_type = []

response = requests.get("https://api.open5e.com/classes")
while not stop_flag:
    for item in response.json()["results"]:
        class_name.append(item["name"])
        class_desc.append(item["desc"])
        hit_die.append(item["hit_dice"])
        hp_at_1.append(item["hp_at_1st_level"])
        hp_higher.append(item["hp_at_higher_levels"])
        armor_prof.append(item["prof_armor"])
        weapon_prof.append(item["prof_weapons"])
        tool_prof.append(item["prof_tools"])
        saving_prof.append(item["prof_saving_throws"])
        skills_prof.append(item["prof_skills"])
        equipment.append(item["equipment"])
        prof_table.append(item["table"])
        spell_type.append(item["spellcasting_ability"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/classes.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(class_name)):
        row = [index,class_name[index], class_desc[index], hit_die[index], hp_at_1[index],
                hp_higher[index], armor_prof[index], weapon_prof[index], tool_prof[index],
                saving_prof[index], skills_prof[index], equipment[index], prof_table[index],
                spell_type[index]]

        writer.writerow(row)
