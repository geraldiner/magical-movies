import glob
import json


sum = 0
for f in glob.glob("*.json"):
    with open(f,) as inFile:
        jsonFile = json.load(inFile)
        for comment in jsonFile:
            print(comment["author"]["name"])
