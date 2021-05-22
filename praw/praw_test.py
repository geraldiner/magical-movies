import praw
import json

# import nltk
# from nltk.corpus import stopwords
# from textblob import TextBlob
# from praw.models import MoreComments

import praw_comment_ids

comment_ids = praw_comment_ids.comment_ids

# Set up Reddit instance
reddit = praw.Reddit(
    user_agent="Comment Extraction for Simple Sentiment Analysis",
    client_id="i-mRnIfYrlnPjQ",
    client_secret="rOKK8s3XmXPX-OCBqUYsrTnukUE8gQ",
)

thread_id = "mx0pwd"


def get_top_level_comments():
    submissionList = []
    submission = reddit.submission(id=thread_id)
    submission.comments.replace_more(limit=None)
    for comment in submission.comments.list():
        submissionList.append(comment)

    with open("praw_comments.txt", "w", encoding="utf-8") as outputFile:
        outputFile.write(str(submissionList))

    outputFile.close()


def write_comment_ids():
    outputFile = open("praw_comment_ids.txt", "w", encoding="utf-8")
    outputFile.write("comment_ids = [")
    with open("praw_comments.txt", "r") as prawFile:
        txt = prawFile.read()
        comments = txt.split(",")
        for comment in comments:
            comment_id = comment.split("'")
            outputFile.write("'" + str(comment_id[1]) + "',\n")

    outputFile.write("]")
    outputFile.close()


def get_comment_info(comment_id):
    comment = reddit.comment(id=comment_id)
    author_info = {"name": "", "avatar": ""}

    try:
        author_info = get_author_info(comment.author)
    except:
        print(comment_id)

    comment.refresh()
    comment.replies.replace_more(limit=None)
    replies = get_comment_replies(comment.replies.list())

    comment_obj = {
        "author": author_info,
        "body": comment.body,
        "body_html": comment.body_html,
        "comment_id": comment.id,
        "permalink": comment.permalink,
        "replies": replies,
        "score": comment.score,
    }
    return comment_obj


def get_author_info(author):
    author_info = {"name": "", "avatar": ""}
    if author.name:
        author_info["name"] = author.name

    if author.icon_img:
        author_info["avatar"] = author.icon_img

    return author_info


def get_comment_replies(repliesList):
    comment_replies_ids = []
    for reply in repliesList:
        comment_replies_ids.append(reply.id)
    return comment_replies_ids


# Function calls
outputFile = open("praw_comments.json", "w", encoding="utf-8")
outputFile.write("[")
for comment in comment_ids:
    com = get_comment_info(comment)
    outputFile.write(json.dumps(com) + ",")

outputFile.write("]")
outputFile.close()
