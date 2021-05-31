import pandas as pd
from tqdm import tqdm
import spacy
from spacy.tokens import DocBin

import training_data_500

nlp = spacy.blank("en")  # load a new spacy model
db = DocBin()  # create a DocBin object

DATA = training_data_500.TRAINING_DATA

for text, annot in tqdm(DATA):  # data in previous format
    doc = nlp.make_doc(text)  # create doc object from text
    ents = []
    for start, end, label in annot["entities"]:  # add character indexes
        span = doc.char_span(start, end, label=label, alignment_mode="contract")
        if span is None:
            print("Skipping entity")
        else:
            ents.append(span)
    doc.ents = ents  # label the text with the ents
    db.add(doc)

db.to_disk("./train.spacy")  # save the docbin object
