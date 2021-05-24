# Where's the Magic?

Finding the magic in movies as picked by Reddit.

<br>
<blockquote>What movie is simply magical to you, no matter how popular or unpopular it may be?

[See original thread on Reddit](https://www.reddit.com/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/)

</blockquote>
</br>

People are one of my passions - I like to know about them and their lives. For this project, I'm picking out these so-called "magical" movies and displaying them with their information from a movie database. Afterwards, I'd like to watch the top 100 or so and see if the magic is really there for me.

**Link to project:** https://github.com/geraldiner/magical-movies

# How It's Made:

**Tech used:** HTML, CSS, JavaScript, Python

**Other Technologies:** RPAW, Reddit API, Pushshift API, SpaCy

# To Do

### Data Collection

- [ ] Get all the comments+data from Reddit
  - Still going 3 days in...
- [ ] Process some test cases to train AI => build training set
  - Compiled a set of 200 comments and the movie within the comment. Later I learned that I needed some false cases to help make it work better.
- [ ] Train AI on training set
  - Tried it with 200 comments and it seems to work OK
- [ ] Run the AI on the rest of the comments to find all the movies
- [ ] Aggregate duplicates together and add their scores/upvotes together (since some movies are mentioned multiple times in their own comment)

### Build My Database

- [ ] Fetch information about movies for every movie found from the Reddit thread

**Movie**

- Title
- Year

## Results from Training the AI

<table >
<tr valign="top">
<th>Movies to be Found</th>
<th>Training on 150</th>
<th>Training on 200</th>
</tr>
<tr valign="top">
<td>
#1

- Anastasia

#2

- Coming to America

#3

- Lock Stock & 2 Smoking Barrels

#4

- Garden State

#5

- Zootopia

#6

- The Color Purple

#7

- Spirited Away

#8

- Scream

#9

- Your Name

#10

- Excalibur

</td>
<td>
#1

- Anastasia

#2

- Coming to America

#3

- Lock Stock & 2 Smoking Barrels

#4

- Garden State

#5

- Zootopia

#6

- The Color Purple
- Whoopi Goldberg
- Danny Glover
- Akosua Busia

#7

- Spirited Away

#8

- Scream

#9

- Your Name - the music

#10

- Sir Thomas Mallory
- Arthur
- King Arthur
- Lady Genevieve
- Charm of Making
- Helen Mirren
- Ever
</td>
<td>
#1
- Anastasia

#2

- Coming to America

#3

- Lock Stock
- Smoking Barrels

#4

- Garden State

#5

- Zootopia

#6

- The Color Purple
- Whoopi Goldberg
- Danny Glover
- Margaret Avery
- Akosua Busia

#7

- Spirited Away

#8

- Scream

#9

- Your Name

#10

- Sir Thomas Mallory
- The Death of Arthur
- King Arthur
- Lady Genevieve
- Charm of Making
- Dame Helen Mirren
</td>
</tr>
</table>

# DevLog

#### May 20, 2021

Got over my fear of working with PRAW, and so far so good. I've been able to get the list of all the top-level comments and am extracting the info from the Reddit API. It was a little confusing to work with their data models, especially the `CommentForest` to get the replies to those top-level comments, but reading the documentation helped.

I think I might pause here to think about the data models I'll be using for my project. I remember watching CJ from (CodingGarden)[https://twitch.tv/codinggarden] work it out for one of his projects, and I think it would save some time in the future.

The major problem right now is that the top level comments have replies, which would be nice to display with the movies themselves (kinda like reviews). But what if they're not that relevant? I'd also thought about how every reply is just a comment, and I'd have a sort of recursive function getting information about comments until it came to one without replies.

But for the time being, I might just extract the text and author of the replies and display that with the movies.

#### May 19, 2021

So far I was doing a lot of testing to see if it was plausable and come up with an approach to the problem. In summary, I used the [Pushshift API](https://pushshift.io/) to get all the comments from the thread. With a subset, I used [SpaCy](https://spacy.io/) to train an AI to extract the movie titles from the comments' text. It didn't work out so well.

I'd followed [a tutorial that did it with "aircraft"](https://towardsdatascience.com/using-spacy-3-0-to-build-a-custom-ner-model-c9256bea098) and only had 11 examples. I thought I could get away with 30 examples, but I more than likely need more -- especially since there are about 45,000 comments. It also seems like I'm getting more than just the top-level comments (ie. replies to top-level comments).

I think the next plan of action is to manually go through as many as possible to build a training set.

<!-- # Optimizations



# Lessons Learned: -->

# Other Projects:

Take a look at other cool stuff I've worked on:

**Animal Crossing BGM IRL:** <a href='https://github.com/geraldiner/acnh-bgm-irl' target='_blank'>https://github.com/geraldiner/acnh-bgm-irl</a>

**Hide & Reveal Information Map:** <a href='https://github.com/geraldiner/hide-reveal' target='_blank'>https://github.com/geraldiner/hide-reveal</a>
