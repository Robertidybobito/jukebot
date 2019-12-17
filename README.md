# Jukebot Hero(ku)

## 1. Project Type: Plan A or B or C

Plan A

## 2. Link to live Application:

CAUTION: The main page loads YouTube videos and automatically starts playing them. You may want to mute or lower your computer volume if 
you are in a public area. 

https://jukebot-heroku.herokuapp.com/

## 3. Link to Github Code Repository: Make sure that you provide the link to project code and not the link to your GitHub repository.

I see the note in Canvas - Discussions about how I should "share the link of the project code on github and not just the home page of your GitHub repository." I'm not sure exactly what that means, but all of my code can be easily found here:

https://github.com/Robertidybobito/jukebot

## 4. List of Technologies/API's Used

YouTube Player API

https://developers.google.com/youtube/iframe_api_reference

## 5. Detailed Description of the project (No more than 500 words)

The Jukebot is intended to be a place where my friends and I can add songs to our personal song lists and listen to everyone's songs. Currently, the Jukebot will only work with YouTube video links.

## 6. List of Controllers and their short description (No more than 50 words for each controller)

### @app.route('/')

Pulls the full song list from the database and opens the main page, musicplayer.html

### @app.route('/songlist')

Joins all of the tables together and opens the song list page, songlist.html

### @app.route('/songlist/<input>')

Same as the above, but the <input> is how the SQL call sorts the table. For example, if <input> is dname, then the table given to songlist.html will use "order by name desc"

### @app.route('/editlist')

Pulls the list of user information and opens selectuser.html

### @app.route('/editlist/<username>'

Pulls the list of the specified user's songs and opens editlist.html. If the form on editlist.html is submitted with a song name and url, this controller will add that information to the database with the user's name, today's date and assigns the song a new ID number.

### @app.route('/editlist/<username>/deletesong/<delete_id>'
  
Same as '/editlist/<username>', but someone clicked the "Delete" button next to one of the songs. <delete_id> is that song's ID number, so this controller removes that song from the SongInfo list and MasterList.
  
## 7. List of Views and their short description (No more than 50 words for each view)

### base.html

Has the html for the navbar and is used by all of the other views for formatting.

### musicplayer.html

Uses static/musicplayer.js to create the full song list, the smaller playlist for what is seen on the webpage for Up Next, Current Song, and Just Played and the API calls to load and play YouTube videos.

### songlist.html

Displays all the songs in the database with the song ID number, song name, a link to its YouTube page, the song's owner and if there is a known error with the song. A user and sort the rows with the options at the top of the list.

### selectuser.html

A very simple view, is used to select with user's song list you want to edit.

### editlist.html

Lets the user add new songs and remove current songs in their song list.

## 8. List of Tables, their Structure and short description

### MasterList

Stores dynamic information about each song, like how many times the song has been played. These haven't been implimented yet, but they would be nice. Columns are: song_id, num_times_played, num_times_skipped, and flag_error.

### SongList

Stores unchangable information about each song. Columns are: song_id_, user_id, name, url, and date_added.

### UserList

Stores information on the users, the owners of song list. Columns are: user_id_, user_name, email, and last_login.

9. References/Resources: List all the references, resources or the online templates that were used for the project.
### YouTube API References

https://tutorialzine.com/2015/08/how-to-control-youtubes-video-player-with-javascript

https://imelgrat.me/javascript/youtube-iframe-api-javascript/

### Dynamically Creating Hyperlinks

https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/

https://www.thesitewizard.com/html-tutorial/open-links-in-new-window-or-tab.shtml

### Insert a New Row into a Database

https://www.pythonsheets.com/notes/python-sqlalchemy.html
