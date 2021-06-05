import json
import glob
import merge
import comments_sorted

# result = []
# for f in glob.glob("*.json"):
#     with open(f, "r") as infile:
#         result += json.load(infile)

# with open("merge.json", "w") as outfile:
#     json.dump(result, outfile)

# all_comments = merge.all_comments
# with open("comments_sorted.py", "w", encoding="utf-8") as outputFile:
#     outputFile.write(json.dumps(sorted(all_comments, key=lambda i: i["score"], reverse=True)))

# outputFile.close()

comments_sorted = comments_sorted.comments_sorted
top_100 = []
for i in range(0,200):
    top_100.append(comments_sorted[i])

with open("top_200_comments.json", "w", encoding="utf-8") as outputFile:
    outputFile.write(json.dumps(top_100))

outputFile.close()