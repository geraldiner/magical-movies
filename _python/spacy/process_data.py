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
    ["Disney\u2019s animated Robin Hood"],
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
    [
        "The Black Stallion",
        "The Sound of Music",
        "Pride & Prejudice",
        "Princess Mononoke",
        "Seven Samurai",
    ],
    ["The Goonies"],
    ["Blues Brothers"],
    ["Mary Poppins"],
    ["Now and Then"],
    ["Fantasia"],
    ["Jurassic Park"],
    ["Clue"],
    ["Singin in the rain"],
    ["Room"],
    ["Notting Hill", "Pretty Woman"],
    ["Perfume: The Story of a Murderer"],
    ["Howls Moving castle"],
    ["eurotrip"],
    ["The Dark Crystal"],
    ["The Fifth Element"],
    ["V for Vendetta"],
    ["Stardust"],
    ["Shawshank Redemption"],
    ["Almost Famous"],
    ["Stargate"],
    ["The Brave Little Toaster"],
    ["Lord of the Rings"],
    ["Coraline"],
    ["Field of Dreams"],
    ["The Grand Budapest Hotel"],
    ["The Mask"],
    ["Best in Show"],
    ["Dune"],
    ["Knight's Tale"],
    ["Clueless"],
    ["Holes"],
    ["Clerks"],
    ["Forrest Gump"],
    ["The Matrix"],
    ["Dogma"],
    ["Children of men", "Last of the Mohicans", "Mars Attacks"],
    ["A Silent Voice"],
    ["Dead Poets Society"],
    ["Dark Crystal"],
    ["Seven Brides for Seven Brothers"],
    ["Dazed and Confused"],
    ["The Secret of Kells"],
    ["Grave of the fireflies"],
    ["Toy story 2", "zootopia"],
    ["Thumbelina"],
    ["The thing"],
    ["The fifth element"],
    ["To Wong Foo, Thanks For Everything!"],
    ["Legend"],
    ["Harold and Maude"],
    ["Return to Oz"],
    ["E.T.", "Eternal sunshine of the spotless mind"],
    ["Mrs Doubtfire"],
    ["How to train your dragon"],
    ["Smokey and the Bandit"],
    ["Independence Day"],
    ["The Mummy"],
    ["Waking Life"],
    ["House of Flying Daggers"],
    ["A Beautiful Mind"],
    ["Across the Universe"],
    ["Lion King"],
    ["What Dreams May Come"],
    ["The Usual Suspects"],
    ["The Big Lebowski"],
    ["Into the SpiderVerse"],
    ["The Martian"],
    ["History of the World", "Spaceballs"],
    ["Beetlejuice"],
    ["The Cat From Outer Space"],
    ["The Nightmare Before Christmas"],
    ["Big Fish", "Eternal Sunshine of the Spotless Mind"],
    ["Secondhand Lions"],
    ["Twister"],
    ["Big Fish"],
    ["Hot Fuzz"],
    ["Superbad"],
    ["HOCUS POCUS"],
    ["Fern Gully"],
    ["Princess Mononoke"],
    ["Charlotte's Web"],
    ["Lion king", "Mulan"],
    ["50 First Dates"],
    ["Spirited away"],
    ["The Chronicles of Narnia"],
    ["Lost in Translation"],
    ["Shawshank Redemption", "Forrest Gump"],
    ["The Fountain"],
    ["The Secret Life of Walter Mitty"],
    ["Eternal sunshine of the spotless mind"],
    ["Moana"],
    ["The Bird Cage"],
    ["Mystery Men"],
    ["101 dalmations"],
    ["Xanadu"],
    ["Children of Men"],
    ["Babe"],
    ["Who Framed Roger Rabbit?"],
    ["Face/Off"],
    ["Desperado"],
    ["The Royal Tenenbaums"],
    ["The Sound of Music"],
    ["Disney's Robin Hood"],
    ["Kung Fu Hustle"],
    ["Edward Scissorhands"],
    ["So I Married an Axe Murderer"],
    ["Your name"],
    ["Dazed and Confused"],
    ["Fight club"],
    ["watership down"],
    ["The Sandlot"],
    ["Interstellar"],
    ["Moulin Rouge"],
    ["Scott Pilgrim vs The World"],
    ["Tucker and dale vs the forces of evil"],
    ["Stardust"],
    ["The Life Aquatic with Steve Zissou", "Moulin Rouge"],
    ["The Never-ending Story"],
    ["The Wizard of Oz"],
    ["Jurassic Park"],
    ["Drive"],
    ["Amelie"],
    ["10 Things I Hate About You"],
    ["Spirited away"],
    ["Ocean's 11"],
    ["Star Wars The Empire Strikes Back"],
    ["Hercules"],
    ["James and the Giant Peach"],
    ["Boogie Nights"],
    ["donnie darko"],
    ["Bridge to Terabithia"],
    ["The Goonies"],
    ["Matilda"],
    ["The Emperor\u2019s New Groove"],
    ["Joe Vs. The Volcano"],
    ["John Wick"],
    ["Rudy"],
    ["Hot Fuzz"],
    ["The princess bride"],
    ["The Princess Bride"],
    ["The Imaginarium of Doctor Parnassus"],
    ["Lord of the Rings"],
    ["The perks of being a wallflower"],
    ["Platoon"],
    ["Robocop"],
    ["The Fifth Element"],
    ["The secret garden"],
    ["Heathers"],
    ["Field of Dreams"],
    ["Point Break"],
    ["Secret life of Walter Mitty"],
    ["Hook"],
    ["Army of Darkness"],
    ["9"],
    ["Polar Express"],
    ["Guardians of Gahoole"],
    ["E.T."],
    ["Miss Pettigrew Lives for a Day"],
    ["Flight of the Navigator"],
    ["O Brother Where Art Thou"],
    ["Kiki's Delivery Service"],
    ["The Little Mermaid"],
    ["The Aristocats", "The Road to El Dorado", "Big Hero Six"],
    ["Tank Girl"],
    ["The Mummy"],
    ["The Adventures of *Buckaroo Banzai* Across the 8th Dimension"],
    ["1986 Transformers Movie"],
    ["Neverending Story"],
    ["Death to Smoochy"],
    ["Death Becomes Her", "Deadpool", "Best Little Whorehouse in Texas"],
    ["Heavy Weights"],
    ["28 Days Later"],
    ["The Princess Bride"],
    ["About Time"],
    ["I\u2019m Gonna Git Ya Sucka"],
    ["Muriel\u2019s Wedding"],
    ["A Knight's Tale"],
    ["Grandma\u2019s Boy"],
    ["Rocky Horror Picture Show"],
    ["Only lovers left alive"],
    ["Ghostbusters (1984)"],
    ["The Waterboy"],
    ["Wimbledon"],
    ["Mars attacks"],
    ["The Boondock Saints"],
    ["Clue (1985)"],
    ["Practical Magic"],
    ["Sleepy Hallow"],
    [""],
    ["Galaxy Quest"],
    ["Spaceballs"],
    ["Ghost Dog: Way of The Samurai"],
    ["1982 Conan the Barbarian"],
    ["No Country For Old Men"],
    ["The mummy"],
    ["Fifth element"],
    ["Hook", "Mrs. Doubtfire", "Matilda"],
    ["Being There"],
    ["Holy Grail", "Life of Brian"],
    ["The Burbs"],
    ["Wall-E"],
    ["Casablanca", "the never-ending story"],
    ["Dodgeball", "Wedding Crashers"],
    ["Napoleon Dynamite"],
    ["How to train your dragon", "The Big Short"],
    ["Riddick"],
    ["The Master of Disguise"],
    ["Bubble boy"],
    ["Time Bandits"],
    ["Adventures in Babysitting"],
    ["Smokey and the  Bandit"],
    ["Robin Hood - Prince of Thieves"],
    ["Labyrinth"],
    ["Grease"],
    ["Up (2009)"],
    [""],
    ["Master and Commander"],
    ["The Shining"],
    ["Nighmare before christmas", "How to train your dragon"],
    ["Robin Hood, Prince of Thieves", "Tintin", "Hellboy"],
    ["the Pick of Destiny"],
    ["Little Miss Sunshine"],
    ["The Fanatic (2019)"],
    ["Transformers"],
    ["The Newsies"],
    ["Star Wars"],
    ["Punch Drunk Love"],
    ["The Saint"],
    ["The shining", "Goodfellas"],
    ["My Cousin Vinny"],
    ["Dazed And Confused"],
    ["stardust"],
    ["Enchanted"],
    ["The Grand Budapest Hotel", "Howl's Moving Castle"],
    ["Bubba Ho-Tep"],
    ["O\u2019 Brother Where Art Thou"],
    ["Napoleon Dynamite"],
    ["Homeward Bound"],
    ["Big Fish"],
    ["The Village"],
    ["Lock Stock & 2 Smoking Barrels"],
    ["August Rush"],
]


def find_movies_in_comments(dataset, searchset, comments):
    for i in range(0, len(searchset)):
        text = comments[i]["body"]
        searchText = searchset[i]
        value = {"entities": []}
        print("text: " + text)
        for x in searchText:
            print("\t searching for: " + x)
            start = text.index(x)
            wordLength = len(x)
            value["entities"].append((start, start + wordLength, "movie"))
        dataset.append((text, value))


# Function calls
TRAINING_DATA = [
    ("It's only getting better as the years pass!", {"entities": []}),
    (
        "That movie really is something else. It's funny, sad, exciting, sad, filled with action, sad, great music as well! Magical. I cry everytime.",
        {"entities": []},
    ),
    (
        "It's really cool when movies get to you even though they're about something you're not really into!",
        {"entities": []},
    ),
    ('"Death is a disease."', {"entities": []}),
    ("To each his own! :D", {"entities": []}),
    ("Yeah that one really is magical!", {"entities": []}),
    ("I love that one as well!", {"entities": []}),
    ("Brief nudity warning", {"entities": []}),
    ("Fuck yes. Have me nightmares as a kid but I love it so much", {"entities": []}),
]

EXTRA_EMPTY = [
    (
        "It's really cool when movies get to you even though they're about something you're not really into!",
        {"entities": []},
    ),
    ('"Death is a disease."', {"entities": []}),
    ("To each his own! :D", {"entities": []}),
    ("Yeah that one really is magical!", {"entities": []}),
    ("I love that one as well!", {"entities": []}),
    ("Brief nudity warning", {"entities": []}),
    ("Fuck yes. Have me nightmares as a kid but I love it so much", {"entities": []}),
]

find_movies_in_comments(TRAINING_DATA, search, comments)
print(len(TRAINING_DATA))
with open("training_data_500.py", "a", encoding="utf-8") as outputFile:
    for tuple in EXTRA_EMPTY:
        TRAINING_DATA.append(tuple)
    outputFile.write("TRAINING_DATA = ")
    outputFile.write(str(TRAINING_DATA))

outputFile.close()

# for tuple in EXTRA_EMPTY:
#     TRAINING_DATA.append(tuple)
# print(len(TRAINING_DATA))


# # print(len(search))
