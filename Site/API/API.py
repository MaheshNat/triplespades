import bcrypt
import mongoengine as mongoDB
from flask import Flask, jsonify, request, make_response
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from pymongo import MongoClient
from flask_socketio import SocketIO, send, emit
import random

app = Flask(__name__)
DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'
mongoDB.connect("CardDeck", host=DB_URI)
app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)
users = MongoClient(DB_URI)


class users(mongoDB.Document):
    name = mongoDB.StringField(required=False)
    email = mongoDB.StringField(required=True)
    password = mongoDB.StringField(required=True)
    authenticated = mongoDB.BooleanField(required=False)
    default_bidder = mongoDB.BooleanField(required=False)

    def __init__(self, name, email, password, default_bidder, authenticated=False, *args, **kwargs):
        super(mongoDB.Document, self).__init__(*args, **kwargs)
        self.name = name
        self.email = email
        self.password = password
        self.authenticated = authenticated
        self.default_bidder = default_bidder

    def __str__(self):
        return f'email: {self.email}, password: {self.password}, authenticated: {self.authenticated}'


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    user = users.objects(email=data.get('email')).first()
    if not data.get('email') or not data.get('password'):
        return response('Email or password Not Found', 400)
    if not user:
        return response('Email not found, Please enter a valid email', 400)
    if not bcrypt.check_password_hash(user['password'], data['password']):
        return response('Incorrect Password', 400)
    if user.authenticated:
        return response('Logged In from another Location', 400)
    user.authenticated = True
    user.save()
    return response('Success', 200)


@app.route('/logout', methods=['POST'])
def logout():
    data = request.get_json(force=True)
    user = users.objects(email=data.get('email')).first()
    if not user.authenticated:
        return response('Error Cant logout, not logged in', 400)
    user.authenticated = False
    user.save()
    return response('Successful', 200)


@app.route('/waiting-room', methods=['GET'])
def waiting_room():
    data = request.get_json(force=True)
    user = users.objects(name=data).first()
    randouser = (random.choice(user))
    if not user.authenticated:
        return response(user.name + "is Offline", 200)
    else:
        return response(user.name + "is Online", 200)

output = waiting_room
while output != 0:
    waiting_room()


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we didn't saved changes by need output to
    app.run(debug=True)