import spacy
import top_200_comments
import json

test_sample = top_200_comments.comments_200

nlp1 = spacy.load("./output/model-last")  # load the best model

resultFile = open("movies_200.json", "w", encoding="utf-8")
movies = []

for i in range(0, 200):
    doc = nlp1(test_sample[i]["body"])
    for entity in doc.ents:
        movie = {}
        movie["title"] = entity.text
        movie["comment_id"] = test_sample[i]["comment_id"]
        movies.append(movie)


resultFile.write(json.dumps(movies))
resultFile.close()
