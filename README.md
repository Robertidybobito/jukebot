# Jukebot

### New Implementations

### Past Implementations

v1.0: load song list from database and play songs

v1.0: view songlist from '/songlist'

v1.0: add new songs through form on /'editlist/'

### Future Implementations

Automatically push changes to the database to github master database.db

Automatically pull new song information from Google Sheets masterlist

User login, store login in browser so there is no need to re-login

Ability to change user information

Detect an error on song playback and

1. play next song
2. send API call to app.py to add '1' to the song's 'flag_error' without having to reload the page
3. modify js songlist to take that song out of the current rotation
4. if song is already in Up Next, detect, push list forward and get a new song

### Resources

## GitPython

https://gitpython.readthedocs.io/en/stable/

https://stackoverflow.com/questions/41836988/git-push-via-gitpython

https://github.com/PyGithub/PyGithub

https://stackoverflow.com/questions/38594717/how-do-i-push-new-files-to-github
