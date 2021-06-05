import praw_comments_500

comments = praw_comments_500.comments

with open("training_data.txt", "w", encoding="utf-8") as outputFile:
    for i in range(0, 100):
        outputFile.write(comments[i]["body"] + "\n")


outputFile.close()
