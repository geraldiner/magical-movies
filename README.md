# Magical Movies as Picked by Reddit
Getting information about the most magical movies as picked by Reddit. (Hopefully part of a larger project to watch these movies and rate them on a 'magic' scale.

The original thread: https://www.reddit.com/r/AskReddit/comments/mx0pwd/what_movie_is_simply_magical_to_you_no_matter_how/
 
**Link to project:** https://github.com/geraldiner/magical-movies
 
# How It's Made:
**Tech used:** HTML, CSS, JavaScript

**Other Technologies:** Pushshift API, SpaCy


# DevLog
#### May 19, 2021
So far I was doing a lot of testing to see if it was plausable and come up with an approach to the problem. In summary, I used the [Pushshift API](https://pushshift.io/) to get all the comments from the thread. With a subset, I used [SpaCy](https://spacy.io/) to train an AI to extract the movie titles from the comments' text. It didn't work out so well. 

I'd followed [a tutorial that did it with "aircraft"](https://towardsdatascience.com/using-spacy-3-0-to-build-a-custom-ner-model-c9256bea098) and only had 11 examples. I thought I could get away with 30 examples, but I more than likely need more -- especially since there are about 45,000 comments. It also seems like I'm getting more than just the top-level comments (ie. replies to top-level comments). 


<!-- # Optimizations


 
# Lessons Learned: -->
 

 
# Other Projects:
Take a look at other cool stuff I've worked on:
 
**Animal Crossing BGM IRL:** <a href='https://github.com/geraldiner/acnh-bgm-irl' target='_blank'>https://github.com/geraldiner/acnh-bgm-irl</a>
 
**Hide & Reveal Information Map:** <a href='https://github.com/geraldiner/hide-reveal' target='_blank'>https://github.com/geraldiner/hide-reveal</a>
 