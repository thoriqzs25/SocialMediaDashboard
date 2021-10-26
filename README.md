# SocialMediaDashboard
A social media dashboard intended for Technical Assesment, It's not a responsive website so use fullscreen on desktop to maximize design usage
# Purpose
The purpose of this project is to build a simple website dashboard using reactJs
# Dependencies
1. ReactJs
2. Redux
3. Netlify
# Assumption
1. A post title entity works as a url to image
2. A post includes a photo with a caption
# Use
- The user and home icon on the header will act as a toggle between subpage
- Viewing album and posts without picking an acount will show a random post (5) and album (6)
- Viewing photos by clicking the random album will show It's owner
- Click the image to show details
- Click post to show comment
- Click the 3 dot to edit post
- Click album to show all photos inside the album
- ALL edit, add, delete result is printed in console due to using static API
# Parameters
1. List of users (100%)
2. List of posts of each user (100%)
3. List of albums of each user (100%)
4. Detail of post (100%)
5. List of photos from an album (100%)
6. Detail of photo (100%)
7. Add, edit, and delete post (100%)
8. Add, edit, and delete comment (100%)
# Additional Feature
1. Search by name
2. Random feeds when no user detected
# Resources
1. API : https://jsonplaceholder.typicode.com/
# Bugs so far 
1. Refreshing the page while on photos of album page will make the website crash (I think netlify doesn't support accessing subpage through url)
