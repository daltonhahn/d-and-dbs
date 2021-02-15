#!/bin/bash

mkdir -p ../data
python3 alignment.py
echo "Collected alignments (1/7)"
python3 classes.py
echo "Collected classes (2/7)"
python3 magicitems.py
echo "Collected magic items (3/7)"
python3 monsters.py
echo "Collected monsters (4/7)"
python3 races.py
echo "Collected races (5/7)"
python3 spells.py
echo "Collected spells (6/7)"
python3 weapons.py
echo "Collected weapons (7/7)"
