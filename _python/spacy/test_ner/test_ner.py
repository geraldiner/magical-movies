import spacy

nlp = spacy.load("en_core_web_sm")
test = "The original Disney *Jungle Book*\n\nThe hand-drawn animations still look amazing, the musical numbers are great, Kaa and Shere-Kahn are both still terrifying. I want to be adopted by Baloo and Bagheera.\n\nOh and *Clerks* is perfect"
doc = nlp(test)
for ent in doc.ents:
    print(ent.label_, " | ", ent.text)
