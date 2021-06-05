import json
import spacy
from nltk import word_tokenize

json_file = open("../spacy/movies_300.json", "r", encoding="utf-8")
data = json.load(json_file)

# sp = spacy.load("en_core_web_sm")
# stopwords = sp.Defaults.stop_words
# stopwords.remove("no")
# stopwords.remove("who")
# stopwords.remove("how")

# for item in data:
#     text = item["title"]
#     tokens = word_tokenize(text)
#     print("Before: " + str(tokens))
#     first = tokens[0].lower()
#     if first in stopwords:
#         print("hi")
#         tokens.pop(0)
#     print("After: " + str(tokens))
#     newText = " ".join(tokens)
#     item["title"] = newText

movie_counts = {}
for item in data:
    comments = []
    movie_title = item["title"].lower()
    if movie_title in movie_counts:
        movie_counts[movie_title] += 1
    else:
        movie_counts[movie_title] = 1


print(movie_counts)
