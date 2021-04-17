def parse(query_items):
    conds = []
    for item in query_items:
        if item == "id" and query_items["id"] != "":
            conds.append("item_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("item_name = \"" + str(query_items["name"]) + '\"')
        if item == "rarity" and query_items["rarity"] != "":
            conds.append("item_rarity = \"" + str(query_items["rarity"]) + '\"')
    return conds
