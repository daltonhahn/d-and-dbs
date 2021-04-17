def parse(query_items):
    conds = []
    for item in query_items:
        if item == "spell_type" and query_items["spell_type"] != "":
            conds.append("class_spell_type = \"" + str(query_items["spell_type"]) + '\"')
        if item == "id" and query_items["id"] != "":
            conds.append("class_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("class_name = \"" + str(query_items["name"]) + '\"')
    return conds
