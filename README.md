# Magical Movies as Picked by Reddit
Getting information about the most magical movies as picked by Reddit. (Hopefully part of a larger project to watch these movies and rate them on a 'magic' scale.

The original thread: https://www.reddit.com/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/
 
**Link to project:** https://github.com/geraldiner/magical-movies
 
# How It's Made:
**Tech used:** HTML, CSS, JavaScript

**Other Technologies:** Pushshift API, SpaCy


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
 