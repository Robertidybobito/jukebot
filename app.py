from flask import Flask, request, Response, render_template, g
import requests
import itertools
from flask_sqlalchemy import SQLAlchemy
#from flask_bootstrap import Bootstrap
from flask_wtf.csrf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import Regexp, Optional, NumberRange
import re
import json
import records

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
    ])
    login = SubmitField("Login")

csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "row the boat"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
csrf.init_app(app)
db = SQLAlchemy(app)

def getUserList():
    return db.session.execute('select * from UserInfo')
    
def getSongList():
    return db.session.execute('select * from MasterList join SongInfo')
    
def getMasterList(sort):
    return db.session.execute('select song_id, name, url, user_name, flag_error from MasterList join SongInfo on song_id=song_id_ join UserInfo on user_id=user_id_ {}'.format(sort))
    
@app.route('/')
def musicplayer(): 
    songlist = getSongList()
    return render_template("musicplayer.html", 
			    songlist=songlist)

@app.route('/songlist')
def defaultmasterlist():
    masterlist = getMasterList("")
    return render_template("songlist.html", 
                            masterlist=masterlist,
			    currentpage="")
	
@app.route('/songlist/<input>')
def masterlist(input):
    sort = "order by " + input[1:]
    if input[0] == 'd': sort = sort + " desc"
    masterlist = getMasterList(sort)
    return render_template("songlist.html",
                            masterlist=masterlist,
			    currentpage=input)
			    
@app.route('/editlist')
def editlist():
	form = NewSongForm()
	return render_template("editlist.html", form=form)

#@app.route('/words', methods=['POST','GET'])
#def letters_2_words():
	

@app.route('/proxy')
def proxy():
    result = requests.get(request.args['url'])
    resp = Response(result.text)
    resp.headers['Content-Type'] = 'application/json'
    return resp


