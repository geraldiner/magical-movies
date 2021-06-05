import json

json_file = open("../spacy/movies_300.json", "r", encoding="utf-8")
data = json.load(json_file)

movie_counts = {}
for item in data:
    if item["title"] in movie_counts:
        movie_counts[item["title"]] += 1
    else:
        movie_counts[item["title"]] = 1


print(movie_counts)
