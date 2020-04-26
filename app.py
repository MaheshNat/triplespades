from flask import Flask, jsonify, request, make_response
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
from pymongo import MongoClient
import json
from bson import ObjectId
from bson.json_util import dumps

DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


# create a instance of class and name is a placeholder for current module
app = Flask(__name__)
io = SocketIO(app, cors_allowed_origins='*')
client = MongoClient(DB_URI)
CORS(app)


@io.on('join')
def join(data):
    users = client.CardDeck.user
    not_authenticated_users = users.find({'authenticated': False})
    if str(dumps(not_authenticated_users)) == '[]':
        emit('start_game', broadcast=True)
    emit('join', data, broadcast=True)


@io.on('leave')
def leave(data):
    emit('leave', data, broadcast=True)


@app.route('/login', methods=['POST'])
def login():
    users = client.CardDeck.user
    data = request.get_json(force=True)
    user = users.find_one({'email': data['email']})
    if not user:
        return response('EMAIL_NOT_FOUND', 400)
    if user['authenticated']:
        return response('ALREADY_AUTHENTICATED', 400)
    if user['password'] != data['password']:
        return response('INVALID_PASSWORD', 400)
    users.update_one(user, {'$set': {'authenticated': True}})
    return JSONEncoder().encode(user)


@app.route('/users', methods=['GET'])
def get_authenticated_users():
    users = client.CardDeck.user
    print(users.find())
    return dumps(users.find())


@app.route('/logout', methods=['POST'])
def logout():
    users = client.CardDeck.user
    data = request.get_json(force=True)
    user = users.find_one({'email': data['email']})
    if not user['authenticated']:
        return response('NOT_AUTHENTICATED', 400)
    users.update_one(user, {'$set': {'authenticated': False}})
    return JSONEncoder().encode(user)


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we ddnt saved changes by need output to
    app.run(debug=True)
    # running the socketio server
    io.run(app)
