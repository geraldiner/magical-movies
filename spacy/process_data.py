import praw_comments_500

comments = praw_comments_500.comments

# Movies to look for in the set
search = [
    ["Anastasia"],
    ["Hook", "Mouse Hunt", "Titanic"],
    ["Treasure Planet"],
    ["Ever After"],
    ["Galaxy Quest"],
    ["Secret of  Nimh"],
    ["Secondhand Lions"],
    ["Cool Runnings"],
    ["A Little Princess"],
    ["Indiana Jones"],
    ["Big Trouble in Little China"],
    ["Stand By Me"],
    ["Practical Magic"],
    ["Clue"],
    ["How to Train Your Dragon", "Test Drive", "Forbidden Frienship"],
    ["BeetleJuice"],
    ["A knights tale"],
    ["Ratatouille"],
    ["Office Space"],
    ["Stardust"],
    ["The Last Unicorn"],
    ["My Cousin Vinny"],
    ["The Iron Giant"],
    ["Pleasantville"],
    ["Tremors"],
    ["The princess bride"],
    ["Empire Records", "Labyrinth"],
    ["Wallace and Gromit"],
    ["O Brother Where Art Thou"],
    ["Blazing Saddles"],
    ["Starship troopers"],
    ["The Lost Boys"],
    ["Pan's Labyrinth"],
    ["Who Framed Roger Rabbit"],
    ["Goodfellas"],
    ["Constantine"],
    ["Little Rascals"],
    ["Kubo and The Two Strings"],
    ["The prince of egypt"],
    ["The Incredibles"],
    ["The Fall"],
    ["Labyrinth"],
    ["Jungle Book", "Clerks"],
    ["Chicken Run"],
    ["Armageddon"],
    ["Matilda"],
    ["12 Angry Men"],
    ["Willow"],
    ["Shaun of the Dead"],
    ["THE MUMMY"],
    ["The Land Before Time"],
    ["National Lampoon's Christmas Vacation"],
    ["Babe"],
    ["Fievel Goes West"],
    ["Howl's Moving Castle"],
    ["The Hunchback of Notre Dame"],
    ["Jurassic Park"],
    ["Big Fish"],
    ["Tangled"],
    ["Blade"],
    ["Brother Bear"],
    ["A league of their own"],
    ["Jurassic Park"],
    ["Edward Scissorhands"],
    ["Wall-E"],
    ["Monty Python and the Holy Grail"],
    ["Fantastic mr fox"],
    ["The Neverending Story"],
    ["Anne of Green Gables"],
    ["Robin Hood"],
    ["The Fifth Element"],
    ["The Goonies"],
    ["Pirates of the Caribbean: curse of the Black Pearl"],
    ["Titan A.E."],
    ["Snatch"],
    ["Real Genius"],
    ["Let the Right One In"],
    ["Back to the Future"],
    ["Amelie"],
    ["Cirque du Soleil: Worlds Away"],
    ["My Neighbor Totoro"],
    ["True Lies"],
    ["Ponyo"],
    ["A Goofy Movie"],
    ["Wreck It Ralph"],
    ["National Treasure"],
    ["nightmare before christmas"],
    ["Excellent Adventure", "Bogus Journey", "Face the Music"],
    ["Catch Me If You Can"],
    ["How to train your dragon"],
    ["Drop Dead Fred"],
    ["SHREK"],
    ["Emperor's New Groove"],
    ["School of rock"],
    ["Ferris Bueller's Day Off"],
    ["Atlantis"],
    ["A fish called Wanda"],
    ["Rear Window"],
    ["The Princess Bride"],
    ["Big Fish"],
    ["The craft"],
    ["Jumanji"],
]


def find_movies_in_comments(dataset, searchset, comments):
    for i in range(0, len(searchset)):
        text = comments[i]["body"]
        searchText = searchset[i]
        value = {"entities": []}
        for x in searchText:
            start = text.index(x)
            wordLength = len(x)
            value["entities"].append((start, start + wordLength, "movie"))
        dataset.append((text, value))


# print(TRAINING_DATA)
# outputFile = open("training_data.py", "a", encoding="utf-8")
# outputFile.write(str(DATA))
# outputFile.close()


# Function calls
TRAINING_DATA = []
find_movies_in_comments(TRAINING_DATA, search, comments)
# print(TRAINING_DATA)
with open("training_data_100.py", "a", encoding="utf-8") as outputFile:
    outputFile.write(str(TRAINING_DATA))
outputFile.close()


# print(len(search))
