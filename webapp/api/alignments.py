def parse(query_items):
    conds = []
    for item in query_items:
        if item == "id" and query_items["id"] != "":
            conds.append("align_ID = " + str(query_items["id"]))
        if item == "name" and query_items["name"] != "":
            conds.append("align_name = \"" + str(query_items["name"]) + '\"')
    return conds
