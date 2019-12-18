# Jukebot

The Jukebot is a website where my friends and I can add songs to our personal song lists and listen to everyone's songs. Currently, the Jukebot will only work with YouTube video links.

## Currently Implemented

v1.0: load song list from database and play songs

v1.0: view songlist from '/songlist'

v1.0: add new songs through form on /'editlist/<username>'

## Future Implementations

Automatically push changes to the database to github master database.db

API setup to change the database without reloading the page

Song skip button to instantly switch to the next song

Song skip button also ands API message to the master list to increase num_times_skipped

When song ends, send API message to the master list to increase num_times_played

Detect an error on song playback and 
1. play next song
2. send API call to app.py to add '1' to the song's 'flag_error' without having to reload the page
3. modify js songlist to take that song out of the current rotation
4. if song is already in Up Next, detect, push list forward and get a new song

## Ideas for v2

Automatically pull new song information from Google Sheets masterlist

Ability to create new users

User login, store login in browser so there is no need to re-login

Ability to change user information

Possible email password recovery..?

On '/', allow user to select which lists they want to hear from 

Then, on '/jukebox' is the actual player

Maybe add a new column to MasterList for how many times selected

Maybe add a new column to SongInfo for category
