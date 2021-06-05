import spacy
import praw_comments_500

test_sample = praw_comments_500.comments

nlp1 = spacy.load(".\output\model-last")  # load the best model

resultFile = open("movies_100.json", "w")
movies = []

for i in range(0, 100):
    doc = nlp1(test_sample[i]["body"])  # input sample text
    for entity in doc.ents:
        movie = {}
        movie["title"] = entity.text
        movie["comment_id"] = test_sample[i]["comment_id"]
        movies.append(movie)


resultFile.write(str(movies))
resultFile.close()
