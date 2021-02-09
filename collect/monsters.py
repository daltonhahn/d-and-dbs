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
        mon_group.append(item["group"])
        mon_alignment.append(item["alignment"])
        mon_lang.append(item["languages"])
        mon_chal_rate.append(item["challenge_rating"])

        mon_arm_class.append(item["armor_class"])
        mon_arm_desc.append(item["armor_desc"])
        mon_hp.append(item["hit_points"])
        mon_hit_die.append(item["hit_dice"])
        mon_speed.append(item["speed"])
        mon_str.append(item["strength"])
        mon_dex.append(item["dexterity"])
        mon_con.append(item["constitution"])
        mon_int.append(item["intelligence"])
        mon_wis.append(item["wisdom"])
        mon_cha.append(item["charisma"])
        mon_str_save.append(item["strength_save"])
        mon_dex_save.append(item["dexterity_save"])
        mon_con_save.append(item["constitution_save"])
        mon_int_save.append(item["intelligence_save"])
        mon_wis_save.append(item["wisdom_save"])
        mon_cha_save.append(item["charisma_save"])
        mon_percept.append(item["perception"])
        mon_skills.append(item["skills"])
        mon_dam_vuln.append(item["damage_vulnerabilities"])
        mon_dam_res.append(item["damage_resistances"])
        mon_dam_imm.append(item["damage_immunities"])
        mon_cond_imm.append(item["condition_immunities"])

        mon_actions.append(item["actions"])
        mon_reactions.append(item["reactions"])
        mon_legendary_desc.append(item["legendary_desc"])
        mon_legendary_actions.append(item["legendary_actions"])
        mon_special_abilities.append(item["special_abilities"])
        mon_spell_list.append(item["spell_list"])

    if response.json()["next"] == None:
        stop_flag = True

    else:
        response = requests.get(response.json()["next"])


# CSV Writing
with open("../data/monsters.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index, mon_name[index], mon_size[index], mon_type[index],
                mon_subtype[index], mon_group[index], mon_alignment[index], 
                mon_lang[index], mon_chal_rate[index]]

        writer.writerow(row)



with open("../data/monsters-stats.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index, mon_arm_class[index], mon_arm_desc[index], mon_hp[index],
                mon_hit_die[index], mon_speed[index], mon_str[index], mon_dex[index],
                mon_con[index], mon_int[index], mon_wis[index], mon_cha[index], 
                mon_str_save[index], mon_dex_save[index], mon_con_save[index], 
                mon_int_save[index], mon_wis_save[index], mon_cha_save[index], 
                mon_percept[index], mon_skills[index], mon_dam_vuln[index], 
                mon_dam_res[index], mon_dam_imm[index], mon_cond_imm[index]]

        writer.writerow(row)



with open("../data/monsters-abilities.csv", "w", newline='') as f:
    writer = csv.writer(f)

    for index in range(len(mon_name)):
        row = [index, mon_actions[index], mon_reactions[index], mon_legendary_desc[index],
                mon_legendary_actions[index], mon_special_abilities[index], mon_spell_list[index]]

        writer.writerow(row)
