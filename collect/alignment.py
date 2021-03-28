import csv

# There are 9 alignments and they can be easily enumerated
# Using this script, will create a quick CSV file of the alignments

alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"]
align_desc = ["**Lawful good** (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.",
        "**Neutral good** (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.",
        "**Chaotic good** (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.",
        "**Lawful neutral** (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.",
        "**Neutral** (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.",
        "**Chaotic neutral** (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.",
        "**Lawful evil** (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.",
        "**Neutral evil** (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.",
        "**Chaotic evil** (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil."]


with open("../data/alignments.csv", "w", newline='\n') as f:
    writer = csv.writer(f)

    for index in range(len(alignments)):
        row = [alignments[index], align_desc[index]]
        writer.writerow(row)



