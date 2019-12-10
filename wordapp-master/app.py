from flask import Flask, request, Response, render_template
import requests
import itertools
from flask_wtf.csrf import CSRFProtect
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import Regexp, Optional, NumberRange
import re
import json

class WordForm(FlaskForm):
    avail_letters = StringField("Letters", validators= [
        Regexp(r'^[a-z]+$', message="must contain letters only"),
        Optional(strip_whitespace=True)
    ])
    word_length = IntegerField("Word Length", validators= [
        NumberRange(min=3, max=10),
        Optional(strip_whitespace=True)
    ])
    word_pattern = StringField("Word Pattern", validators= [
        Regexp(r'^[a-z.]+$', message="must contain letters and .'s only"),
        Optional(strip_whitespace=True)
    ])
    submit = SubmitField("Go")


csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "row the boat"
csrf.init_app(app)

@app.route('/')
def index():
    form = WordForm()
    return render_template("index.html", form=form)


@app.route('/words', methods=['POST','GET'])
def letters_2_words():

    form = WordForm()
    if form.avail_letters.data == "" and form.word_length.data is None and form.word_pattern.data == "":
        return render_template("index.html", form=form)
    if form.word_length.data is not None and form.word_pattern.data != "":
        if int(form.word_length.data) != len(form.word_pattern.data):
            return render_template("index.html", form=form)
    
    letters = form.avail_letters.data
    
    with open('sowpods.txt') as f:
        good_words = set(x.strip().lower() for x in f.readlines())

    word_set = set()
    if letters != "":
        lower = 3
        upper = len(letters)+1
        if form.word_length.data is not None:
            lower = int(form.word_length.data)
            upper = lower+1
        for l in range(lower,upper):
            for word in itertools.permutations(letters,l):
                w = "".join(word)
                if w in good_words:
                    if form.word_pattern.data == "":
                        URL =  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/{}?key=5e4c8a39-3391-4e71-97d7-e3aa8847672d".format(w)
                        jsondata = requests.get(url=URL).json()
                        try:
                            defin = jsondata[0]['shortdef'][0]
                        except IndexError:
                            defin = "no definition available"
                        except TypeError:
                            defin = "no definition available"
                        word_set.add((w,defin))
                    else:
                        p = str(form.word_pattern.data)
                        if len(w) == len(p):
                            check = True
                            for c1, c2 in zip(w, p):
                                if c1 != c2:
                                    if c2 == "." and c1 == "":
                                        check = False
                                    elif c2 != ".":
                                        check = False
                            if check:
                                URL =  "https://www.dictionaryapi.com/api/v3/references/collegiate/json/{}?key=5e4c8a39-3391-4e71-97d7-e3aa8847672d".format(w)
                                jsondata = requests.get(url=URL).json()
                                try:
                                    defin = jsondata[0]['shortdef'][0]
                                except IndexError:
                                    defin = "no definition available"
                                except TypeError:
                                    defin = "no definition available"
                                word_set.add((w,defin))
    else:
        for w in good_words:
            check = True
            if form.word_length.data is not None:
                if len(w) != int(form.word_length.data):
                    check = False
            if form.word_pattern.data != "":
                p = str(form.word_pattern.data)
                if len(w) != len(p):
                    check = False
                for c1, c2 in zip(w, p):
                    if c1 != c2:
                        if c2 == "." and c1 == "":
                            check = False
                        elif c2 != ".":
                            check = False
            if check:
                URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/{}?key=5e4c8a39-3391-4e71-97d7-e3aa8847672d".format(w)
                jsondata = requests.get(url=URL).json()
                try:
                    defin = jsondata[0]['shortdef'][0]
                except IndexError:
                    defin = "no definition available"
                except TypeError:
                    defin = "no definition available"
                word_set.add((w,defin))
    
    return render_template('wordlist.html',
        wordlist=sorted(word_set, key=lambda x: x[0]),
        name="CS4131")




@app.route('/proxy')
def proxy():
    result = requests.get(request.args['url'])
    resp = Response(result.text)
    resp.headers['Content-Type'] = 'application/json'
    return resp


