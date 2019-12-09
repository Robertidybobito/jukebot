General format

go to jukebot.com, app('/')
  * initial page load, main_jukebot
    * gets the length of song_list
    * define play_list size 7
    * loop 4 times i = 0,1,2,3
      * r = random number between 0 and len(song_list)
      * song = song_list[song_id = r]
      * if song->flag_error = 0
        * play_list[i] = song_list[song_id->r]
      * else
        * i-- # need to retry adding a song to the play_list if there is it is known the song has an error
    * start playing song at play_list[3]

  * if jukebox.com detects the currently playing song has ended
    * get the length of song_list


----
tables
  table 1: master list
    user_id
    song_id
    num_times_played
    num_times_skipped
    flag_error
  
  table 2: song info
    song_id
    song_name
    song_url
    
  table 3: user info
    user_id
    user_name
    user_email
    last_login
    etc.
    
example
  table 1, index 50
    user_id = 0
    song_id = 50
    num_times_played = 30
    num_times_skipped = 0
    flag_error = 0
  
  when connecting to table 2 via song_id
    song_id = 50
    song_name = All Star
    song_url = https://www.youtube.com/watch?/ the link for All Star
    
  when connecting to table 3 via user_id
    user_id = 0
    user_name = Robert
    user_email = robertidybobito.berquiste@gmail.com
    last_login = 12/9/2019 11:51AM
    etc.
    
----
proposal feedback
You can remove the song_name and song_url from the Table 1 and create a new Table called "Song_Info" which can have the song_id, song_name and song_url. This is also a good practice because you always have related information together. Your first table can then have user_id, song_id,num_times_played, and num_times_skipped . Also, you can have a "User_info" table that can have columns such as  user_id, user_name, email, last_login etc.

----
project proposal
For my final project, I would like to create a website that acts as a personal radio for me and my friends. The main page will be the music player that uses an API to play YouTube videos. It would also show the previous 3 videos played and the 3 videos queued to play. I would like this page to be live so that if my friends are on the main page from their computers we would all hear the same music at the same time, but this would be a secondary objective and might not be in the final submission.

The second page will show all the songs the main page will play. It would show them in different tables so that the songs under Robert will show the songs I put in with the song’s name and a URL to the video and the songs under each of my friend’s names will show their songs. Depending on how this goes, I can do this by showing everyone’s lists at the same time or have a button for each person to rebuild the page or maybe hide and show each person’s table. The tables will be automatically displayed in alphabetical order by the songs’ names, but the stored table itself may be in order by when the song was added.

The third page will be the list editing page, where each person has their own username and password to make sure only they can only edit their own list. This third page will use WTForms to allow each person to add a song by entering its name and URL. The can delete an item from their list by clicking on an X button next to each row and there could be a pop-up asking them to confirm that they want to delete that song.

Table 1 is the master table of everyone’s songs. Each person has a person_id to match with the songs they added and the second and third pages will use the person_id to determine which songs belong to which person. Table 1 will have person_id, song_id, song_name, song_url, num_times_played, num_times_skipped. A potential hiccup is if the same song is added to more than one person’s list or when more than one person adds the same song to their own list. I would like to create a way to assign each of these the same song_id so that when the program selects a song to add to the music player the duplicate entries won’t be unfairly played more, but I’m worried that may create new problems for Table 2. I might need to make another column to specifically deal with duplicates. Elements in Table 1 can be modified in the third page.

Table 2 will be the music player. There are only 7 rows in Table 2 and when a new element is added, it takes the place of row 1 and every element moves down the table and the bottom element is deleted. The song in row 4 is the one currently being played and the trigger to shift all rows down a place and start the new song is when the current song ends. Table 2 pulls directly from Table 1 and generates a random number from 0 to len(Table 1) to pick a song to add to its list. Table 2 only needs to use song_id, song_name, and song_url.

I’m not sure what Table 3 would be, so any advice would be much appreciated. I could make a “new” table for each person, but since the elements of these tables are the same it would be better to put all of their song information into one table. 
