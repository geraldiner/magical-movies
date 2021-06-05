import spacy
import json

# test_sample = open("top_200_comments_.json", "r", encoding="utf-8")
# data = json.load(test_sample)

test_sample = open("../praw/praw_comments_part01.json", "r", encoding="utf-8")
data = json.load(test_sample)

sorted_data = sorted(data, key=lambda i: i["score"], reverse=True)

nlp1 = spacy.load("./output/model-last")  # load the best model

# Testing Code
# for i in range(0, 200):
#     doc = nlp1(data[i]["body"])
#     for ent in doc.ents:
#         text = data[i]["body"]
#         print(text)
#         print("\tMovie found: " + ent.text)

# Printing Code
resultFile = open("movies_300.json", "w", encoding="utf-8")
movies = []

for i in range(0, 300):
    if data[i]["body"] != '[deleted]':
        doc = nlp1(data[i]["body"])
        for ent in doc.ents:
            text = data[i]["body"]
            movie = {}
            movie["title"] = ent.text
            movie["comment_text"] = text
            movie["score"] = data[i]["score"]
            movie["comment_id"] = data[i]["comment_id"]
            movies.append(movie)


resultFile.write(json.dumps(sorted(movies, key=lambda i: i["score"], reverse=True)))
resultFile.close()
