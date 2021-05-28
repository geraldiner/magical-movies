import glob
import json


sum = 0
for f in glob.glob("*.json"):
    with open(f) as inFile:
        sum += len(json.loads(inFile))

print(sum)