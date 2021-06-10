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

**Other Technologies:** PRAW, Reddit API, Pushshift API, SpaCy

# To Do

### Data Collection

- [x] Get all the comments+data from Reddit
  - FINALLY DONE - May 27, 2021 - That's a lot of data man.
- [x] Process some test cases to train AI => build training set
  - Compiled a set of 200 comments and the movie within the comment. Later I learned that I needed some false cases to help make it work better.
- [x] Train AI on training set
  - Tried it with 300 comments and it seems to work OK (See results: [May 26, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-26.md))
- [ ] Run the AI on the rest of the comments to find all the movies
- [ ] Aggregate duplicates together and add their scores/upvotes together (since some movies are mentioned multiple times in their own comment)

### Build My Database

- [x] Fetch information about movies for every movie found from the Reddit thread

**Movie**

Probably from [The Movie Database](https://themoviedb.org) so I won't get rate-limited. They offer:

- Title
- Genre
- Overview
- Popularity
- Poster Image Link
- Release Date
- Vote Average
- Vote Count

In addition to this, I will also add the information from the top-level Reddit comment(s) that have mentioned it, including:

- Author Name
- Author Profile Pic
- Body
- Permalink
- Upvote Score

# DevLog

- [June 9, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-06-09.md)
- [May 31, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-31.md)
- [May 26, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-26.md)
- [May 23, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-23.md)
- [May 20, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-20.md)
- [May 19, 2021](https://github.com/geraldiner/magical-movies/blob/main/_devlogs/2021-05-19.md)

# Other Projects:

Take a look at other cool stuff I've worked on:

**Animal Crossing BGM IRL:** <a href='https://github.com/geraldiner/acnh-bgm-irl' target='_blank'>https://github.com/geraldiner/acnh-bgm-irl</a>

**Hide & Reveal Information Map:** <a href='https://github.com/geraldiner/hide-reveal' target='_blank'>https://github.com/geraldiner/hide-reveal</a>
