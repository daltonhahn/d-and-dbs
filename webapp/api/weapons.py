def parse(query_items):
    conds = []
    for item in query_items:
        if item == "type" and query_items["type"] != "":
            conds.append("weapon_type = \"" + str(query_items["type"]) + '\"')
        if item == "id" and query_items["id"] != "":
            conds.append("weapon_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("weapon_name = \"" + str(query_items["name"]) + '\"')
        if item == "dmg" and query_items["dmg"] != "":
            conds.append("weapon_dmg = \"" + str(query_items["dmg"]) + '\"')
    return conds
