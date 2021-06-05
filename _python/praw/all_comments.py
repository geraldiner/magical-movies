import json
import glob

result = []
for f in glob.glob("*.json"):
    with open(f, "r") as infile:
        result += json.load(infile)

with open("merge.json", "w") as outfile:
    json.dump(result, outfile)
