def parse(query_items):
    conds = []
    for item in query_items:
        if item == "lvl" and query_items["lvl"] != "":
            conds.append("character_lvl = " + str(query_items["lvl"]))
        if item == "id" and query_items["id"] != "":
            conds.append("character_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("character_name = \"" + str(query_items["name"]) + '\"')
    return conds
