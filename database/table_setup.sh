#!/bin/bash

mysql danddbs < create_tables.sql
echo "Tables Created\n"
mysql danddbs < populate_tables.sql
echo "Tables populated with scraped data\n"
