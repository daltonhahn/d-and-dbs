def parse(query_items):
    conds = []
    for item in query_items:
        if item == "lvl" and query_items["lvl"] != "":
            conds.append("spell_lvl = \"" + str(query_items["lvl"]) + '\"')
        if item == "id" and query_items["id"] != "":
            conds.append("spell_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("spell_name = \"" + str(query_items["name"]) + '\"')
        if item == "school" and query_items["school"] != "":
            conds.append("spell_school = \"" + str(query_items["school"]) + '\"')
        if item == "classes":
            classList = []
            for s_class in query_items["classes"]:
                if s_class == "checkedBard" and query_items["classes"][s_class] == True:
                    classList.append("Bard")
                elif s_class == "checkedCleric" and query_items["classes"][s_class] == True:
                    classList.append("Cleric")
                elif s_class == "checkedDruid" and query_items["classes"][s_class] == True:
                    classList.append("Druid")
                elif s_class == "checkedPaladin" and query_items["classes"][s_class] == True:
                    classList.append("Paladin")
                elif s_class == "checkedRanger" and query_items["classes"][s_class] == True:
                    classList.append("Ranger")
                elif s_class == "checkedRitualCaster" and query_items["classes"][s_class] == True:
                    classList.append("Ritual Caster")
                elif s_class == "checkedSorcerer" and query_items["classes"][s_class] == True:
                    classList.append("Sorcerer")
                elif s_class == "checkedWarlock" and query_items["classes"][s_class] == True:
                    classList.append("Warlock")
                elif s_class == "checkedWizard" and query_items["classes"][s_class] == True:
                    classList.append("Wizard")
            if len(classList) > 0:
                conds.append("spell_classes LIKE \"%" + str(", ".join(classList)) + "%\"")
    return conds

def update_parse(query_items):
    vals = []
    for k,v in query_items.items():
        if k == "classes":
            c_list = []
            for s_class in v.items():
                if s_class[0] == "checkedBard" and s_class[1] == True:
                    c_list.append("Bard")
                elif s_class[0] == "checkedCleric" and s_class[1] == True:
                    c_list.append("Cleric")
                elif s_class[0] == "checkedDruid" and s_class[1] == True:
                    c_list.append("Druid")
                elif s_class[0] == "checkedPaladin" and s_class[1] == True:
                    c_list.append("Paladin")
                elif s_class[0] == "checkedRanger" and s_class[1] == True:
                    c_list.append("Ranger")
                elif s_class[0] == "checkedRitualCaster" and s_class[1] == True:
                    c_list.append("Ritual Caster")
                elif s_class[0] == "checkedSorcerer" and s_class[1] == True:
                    c_list.append("Sorcerer")
                elif s_class[0] == "checkedWarlock" and s_class[1] == True:
                    c_list.append("Warlock")
                elif s_class[0] == "checkedWizard" and s_class[1] == True:
                    c_list.append("Wizard")
            temp = ",".join(c_list)
            vals.append(temp)
        else:
            vals.append(v)

    return vals
