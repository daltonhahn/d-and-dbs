import requests
import json
import csv

stop_flag = False 

mon_name = []
mon_size = []
mon_type = []
mon_subtype = []
mon_group = []
mon_alignment = []
mon_lang = []
mon_chal_rate = []

mon_arm_class = []
mon_arm_desc = []
mon_hp = []
mon_hit_die = []
mon_speed = []
mon_str = []
mon_dex = []
mon_con = []
mon_int = []
mon_wis = []
mon_cha = []
mon_str_save = []
mon_dex_save = []
mon_con_save = []
mon_int_save = []
mon_wis_save = []
mon_cha_save = []
mon_percept = []
mon_skills = []
mon_dam_vuln = []
mon_dam_res = []
mon_dam_imm = []
mon_cond_imm = []

mon_actions = []
mon_reactions = []
mon_legendary_desc = []
mon_legendary_actions = []
mon_special_abilities = []
mon_spell_list = []


response = requests.get("https://api.open5e.com/monsters")
while not stop_flag:
    for item in response.json()["results"]:
        mon_name.append(item["name"])
        mon_size.append(item["size"])
        mon_type.append(item["type"])
        mon_subtype.append(item["subtype"])
        mon_group = []
        mon_alignment = []
        mon_lang = []
        mon_chal_rate = []

        mon_arm_class = []
        mon_arm_desc = []
        mon_hp = []
        mon_hit_die = []
        mon_speed = []
        mon_str = []
        mon_dex = []
        mon_con = []
        mon_int = []
        mon_wis = []
        mon_cha = []
        mon_str_save = []
        mon_dex_save = []
        mon_con_save = []
        mon_int_save = []
        mon_wis_save = []
        mon_cha_save = []
        mon_percept = []
        mon_skills = []
        mon_dam_vuln = []
        mon_dam_res = []
        mon_dam_imm = []
        mon_cond_imm = []

        mon_actions = []
        mon_reactions = []
        mon_legendary_desc = []
        mon_legendary_actions = []
        mon_special_abilities = []
        mon_spell_list = []

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/monsters.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index ]

        writer.writerow(row)



with open("../data/monsters-stats.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index ]

        writer.writerow(row)



with open("../data/monsters-abilities.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index ]

        writer.writerow(row)
