###
# Read all the comment_ids from another file
# For each comment_id request the info from the API
# Save the response in the txt as a list of dictionaries, [ {}, {} ]
###

import comment_ids
import requests
import praw_comment_ids

# commentIds = comment_ids.comment_ids
commentIds = praw_comment_ids.comment_ids

# print(commentIds)

# outputFile = open("comment_info_response.json", "a")
outputFile = open("praw_comment_info_response.json", "a")
outputFile.write("[")

for commentId in commentIds:
    url = (
        "https://api.pushshift.io/reddit/comment/search?ids="
        + commentId
        + "&fields=author,body,id,permalink,score"
    )
    headers = {"cache-control": "no-cache"}
    response = requests.request("GET", url, headers=headers)
    data = response.json()["data"][0]
    outputFile.write(str(data) + ",\n")

outputFile.write("]")
outputFile.close()
