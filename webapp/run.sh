#!/bin/bash
nohup yarn start > /dev/null 2>&1 &
nohup yarn start-api > /dev/null 2>&1 &

