from flask import Flask, request, Response, render_template
import requests
import itertools
from flask_wtf.csrf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import Regexp, Optional, NumberRange
import re
import json

class NewSongForm(FlaskForm):
    song_name = StringField("Song Name", validators= [
        Regexp(r'^[a-z]+$', message="must contain letters only"),
        Optional(strip_whitespace=True)
    ])
    song_url = IntegerField("Song URL", validators= [
        # NumberRange(min=3, max=10),
        Optional(strip_whitespace=True)
    ])
    submit = SubmitField("Submit")

class LoginForm(FlaskForm):
	username = StringField("Username", validators= [
		Optional(strip_whitespace=True)
	])
	password = StringField("Password", validators= [
		Optional(strip_whitespace=True)
	]

csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "row the boat"
csrf.init_app(app)

def getMasterList():
	song_id
	num_times_played
	num_times_skipped

def getSongInfo(song_id): # uses the SQL database to return information about the song
	song_id
	user_id
	song_name
	song_url
	date_added

def getUserInfo(user_id):
	user_id
	user_name
	user_email
	last_login

# Load the main page with the full song list table. Javascript will handle playing the videos.
# When a song ends, the Javascript will use the returned list to find the next song to play
# Need some way for Javascript to call one of these functions for when an error occurs
# 	Might be possible https://www.quora.com/How-do-I-run-a-Python-script-onclick-event-from-JavaScript
#	Problem is Python function typically run by the HTML request. Might need to load every video first..?
#	That, or have Javascript edit the SQL list. I don't like that for security reasons
#	Maybe make a new HTML request for every song..? Or only when this happens to remove the problem song from the active playlist
@app.route('/', methods=['POST','GET']) # POST and GET are for using the YouTube API
def index(): 
	playlist = getMasterList()
    return render_template("index.html", 
		playlist=sorted(song_id
		name="playlist") # name="CS4131") ?

@app.route('/login')
def login():
	form = LoginForm()
	
@app.route('/editlist') # maybe change to /login/robert or /login/fritzy
def editlist();
	form = NewSongForm()
	return render_template("editlist.html", form=form)

@app.route('/words', methods=['POST','GET'])
def letters_2_words():
	

@app.route('/proxy')
def proxy():
    result = requests.get(request.args['url'])
    resp = Response(result.text)
    resp.headers['Content-Type'] = 'application/json'
    return resp


