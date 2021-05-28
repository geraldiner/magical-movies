import os
import glob
import json

for f in glob.glob("*.json"):
    with open(f) as inFile:
        print(len(json.load(inFile)))
