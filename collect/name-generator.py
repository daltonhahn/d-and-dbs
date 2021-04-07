import requests
import json
import csv
import re
import random
from bs4 import BeautifulSoup

urls = [
        "https://thestoryshack.com/tools/dwarf-name-generator/random-dwarf-names/",
        "https://thestoryshack.com/tools/elf-name-generator/random-elf-names/",
        "https://thestoryshack.com/tools/halfling-name-generator/random-halfling-names/",
        "https://thestoryshack.com/tools/human-name-generator/random-human-names/",
        "https://thestoryshack.com/tools/dragonborn-name-generator/random-dragonborn-names/",
        "https://thestoryshack.com/tools/gnome-name-generator/random-gnome-names/",
        "https://thestoryshack.com/tools/half-elf-name-generator/random-half-elf-names/",
        "https://thestoryshack.com/tools/half-orc-name-generator/random-half-orc-names/",
        "https://thestoryshack.com/tools/tiefling-name-generator/random-tiefling-names/"
]

generated_names = []

for url in urls:
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')
    section = soup.find_all("section", {'id': 'hundred-ideas'})
    for tag in section:
        names = tag.find_all("li")
        for i in range(len(names)):
            if (i < 4):
                continue
            else:
                generated_names.append(names[i].text)


# CSV Writing
with open("../data/characters.csv", "w", newline='\n') as f:
    writer = csv.writer(f)

    for index in range(len(generated_names)):
        row = [index+1,generated_names[index], random.randint(1,20)]

        writer.writerow(row)
