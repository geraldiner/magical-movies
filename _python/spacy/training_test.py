import spacy
import json

test_sample = open("top_200_comments_.json", "r", encoding="utf-8")
data = json.load(test_sample)

nlp1 = spacy.load("./output/model-last")  # load the best model

resultFile = open("movies_200.json", "w", encoding="utf-8")
movies = []

for i in range(0, 200):
    doc = nlp1(data[i]["body"])
    for ent in doc.ents:
        text = data[i]["body"]
        movie = {}
        movie["title"] = ent.text
        movie["comment_text"] = text
        movie["score"] = data[i]["score"]
        movie["comment_id"] = data[i]["comment_id"]
        movies.append(movie)


resultFile.write(json.dumps(movies))
resultFile.close()
