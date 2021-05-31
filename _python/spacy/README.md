# Training AI with NER

Based on an article by [Zachary Lim](https://towardsdatascience.com/using-spacy-3-0-to-build-a-custom-ner-model-c9256bea098)

1. Set up training data

`python process_data.py`

Which will output a `training_data_500.py` file

2. Convert old training data format to new spacy format

`python training.py`

Which will output a `training.spacy` file

3. Run `spacy train`

`python -m spacy train config.cfg --output ./output --paths.train ./train.spacy --paths.dev ./train.spacy`

4. Run `training_test.py`

Test how well the AI is doing

1. Anastasia
2. Coming to America
3. Lock Stock & 2 Smoking Barrels
