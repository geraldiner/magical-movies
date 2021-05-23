import spacy

nlp1 = spacy.load(".\output\model-last")  # load the best model

test_sample = [
    {
        "author": {
            "name": "whyfruitflies",
            "avatar": "https://styles.redditmedia.com/t5_24sily/styles/profileIcon_snoo7ed6cdf2-e811-47f2-9b1f-c209c48ff081-headshot.png?width=256&height=256&crop=256:256,smart&s=79d7e71fd5b67a24468468835f881aaa969fb0cd",
        },
        "body": "I must've watched Adventures in Babysitting about 25 times and I honestly can't explain why. I just loved it so much.",
        "body_html": '<div class="md"><p>I must&#39;ve watched Adventures in Babysitting about 25 times and I honestly can&#39;t explain why. I just loved it so much.</p>\n</div>',
        "comment_id": "gvm2ran",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvm2ran/",
        "replies": ["gvng5ik", "gvnswen"],
        "score": 12,
    },
    {
        "author": {
            "name": "wilbertfire",
            "avatar": "https://styles.redditmedia.com/t5_saq80/styles/profileIcon_snoobdd4f166-0602-424e-b630-db0d1bde855a-headshot.png?width=256&height=256&crop=256:256,smart&s=31a555efb6cf130d861d1edbe30ed9a4c6c282aa",
        },
        "body": "Smokey and the  Bandit.\n\nStill by miles the best film ever made.",
        "body_html": '<div class="md"><p>Smokey and the  Bandit.</p>\n\n<p>Still by miles the best film ever made.</p>\n</div>',
        "comment_id": "gvm45lt",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvm45lt/",
        "replies": ["gvm4ge9"],
        "score": 15,
    },
    {
        "author": {
            "name": "RowellTheBlade",
            "avatar": "https://styles.redditmedia.com/t5_b805v/styles/profileIcon_snoo0071fc21-5adf-4cfe-acc0-18b960bf3470-headshot.png?width=256&height=256&crop=256:256,smart&s=afb15b61716d0aec5b5eedceac2a51b01433078f",
        },
        "body": '"Robin Hood - Prince of Thieves". As a kid, I had two books about the Bayeux tapestry. Then, I saw the first real, "moving" pictures of them in the intro, to that amazing soundtrack. I was ten years old; nothing will ever beat that feeling.',
        "body_html": '<div class="md"><p>&quot;Robin Hood - Prince of Thieves&quot;. As a kid, I had two books about the Bayeux tapestry. Then, I saw the first real, &quot;moving&quot; pictures of them in the intro, to that amazing soundtrack. I was ten years old; nothing will ever beat that feeling.</p>\n</div>',
        "comment_id": "gvm4tje",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvm4tje/",
        "replies": ["gvnyzqk"],
        "score": 12,
    },
    {
        "author": {
            "name": "SnooPears788",
            "avatar": "https://styles.redditmedia.com/t5_33k4cq/styles/profileIcon_snoo381d2ae3-135a-4887-ac3f-d4b1fc68043e-headshot.png?width=256&height=256&crop=256:256,smart&s=060f701b8ab0db92b547b39e3e1dc5c193aa048b",
        },
        "body": "Labyrinth! David Bowie and Jim Henson together!! LOVE!!!",
        "body_html": '<div class="md"><p>Labyrinth! David Bowie and Jim Henson together!! LOVE!!!</p>\n</div>',
        "comment_id": "gvm9m5d",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvm9m5d/",
        "replies": [],
        "score": 15,
    },
    {
        "author": {
            "name": "widdershins13",
            "avatar": "https://www.redditstatic.com/avatars/avatar_default_06_FF4500.png",
        },
        "body": " Grease. Great cast, great music and dance numbers and a shambolic storyline that mirrored the one I could have had if my classmates weren't such boring, uninspired assholes.",
        "body_html": '<div class="md"><p>Grease. Great cast, great music and dance numbers and a shambolic storyline that mirrored the one I could have had if my classmates weren&#39;t such boring, uninspired assholes.</p>\n</div>',
        "comment_id": "gvmbs65",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvmbs65/",
        "replies": [],
        "score": 14,
    },
    {
        "author": {
            "name": "FreeQster",
            "avatar": "https://www.redditstatic.com/avatars/avatar_default_06_4856A3.png",
        },
        "body": "Up (2009)",
        "body_html": '<div class="md"><p>Up (2009)</p>\n</div>',
        "comment_id": "gvmf820",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvmf820/",
        "replies": [],
        "score": 16,
    },
    {
        "author": {
            "name": "phydeauxbreath",
            "avatar": "https://www.redditstatic.com/avatars/avatar_default_05_FF4500.png",
        },
        "body": "Pretty much all [Terry Gilliam movies](https://www.imdb.com/name/nm0000416/).",
        "body_html": '<div class="md"><p>Pretty much all <a href="https://www.imdb.com/name/nm0000416/">Terry Gilliam movies</a>.</p>\n</div>',
        "comment_id": "gvlc6kj",
        "permalink": "/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/gvlc6kj/",
        "replies": [
            "gvlqu3r",
            "gvly66a",
            "gvm1ga4",
            "gvm5y7a",
            "gvm37lo",
            "gvm73l5",
            "gvm36z5",
            "gvm6b36",
            "gvm6r29",
            "gvm9pp2",
            "gvlvjwi",
            "gvm6rdo",
            "gvnk69n",
            "gvmf934",
            "gvmpcue",
            "gvm5f4p",
            "gvmxhvg",
            "gvm6zto",
            "gvn2sgj",
            "gvmakln",
            "gvmdzas",
            "gvme1bc",
            "gvnucxv",
            "gvo8ic3",
        ],
        "score": 117,
    },
]


# Adventures in Babysitting
# Smokey and the  Bandit
# Robin Hood - Prince of Thieves
# Labyrinth
# Grease
# Up
# Terry Gilliam

print(len(test_sample))

for i in range(0, len(test_sample)):
    print("#" + str(i))
    doc = nlp1(test_sample[i]["body"])  # input sample text
    for entity in doc.ents:
        print("\t" + entity.label_, " | ", entity.text)
