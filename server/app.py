import random
from flask import Flask, jsonify, request, make_response
from flask_socketio import SocketIO, send, emit
from flask_cors import CORS
from pymongo import MongoClient
import json
from bson import ObjectId
from bson.json_util import dumps
import bcrypt
import util
import datetime
from flask_bcrypt import Bcrypt

DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'
BCRYPT_LOG_ROUNDS = 4
deck = []

# create a instance of class and name is a placeholder for current module
app = Flask(__name__)
io = SocketIO(app, cors_allowed_origins='*')
client = MongoClient(DB_URI)
bcrypt = Bcrypt(app)
CORS(app)

client.CardDeck.blacklist_tokens.create_index(
    "createdAt", expireAfterSeconds=86400)


@io.on('bid')
def bid(data):
    emit('bid', data, broadcast=True)


@io.on('join')
def join(data):
    users = client.CardDeck.users
    not_authenticated_users = users.find({'authenticated': False})
    # if str(dumps(not_authenticated_users)) == '[]':
    emit('start_game', broadcast=True)
    emit('join', data, broadcast=True)


@io.on('leave')
def leave(data):
    emit('leave', data, broadcast=True)

# request body: {email: string, name: string, password: string}
# response body: None
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json(force=True)
    users = client.CardDeck.users
    if users.find_one({'email': data['email']}):
        return response('USER_EXISTS', 400)

    password = bcrypt.generate_password_hash(
        data['password'], BCRYPT_LOG_ROUNDS
    ).decode()
    users.insert(
        {'name': data['name'], 'email': data['email'], 'password': password, 'authenticated': False})
    return response('SUCCESS', 201)

# request body: {email: string, password: string}
# response body: {token: string, name: string}
@app.route('/login', methods=['POST'])
def login():
    users = client.CardDeck.users
    data = request.get_json(force=True)
    user = users.find_one({'email': data['email']})
    if not user:
        return response('EMAIL_NOT_FOUND', 400)
    if user['authenticated']:
        return response('ALREADY_AUTHENTICATED', 400)
    if not bcrypt.check_password_hash(user['password'], data['password']):
        return response('INVALID_PASSWORD', 400)

    auth_token = util.encode_auth_token(str(user['_id']))
    print(auth_token)
    # users.update_one(user, {'$set': {'authenticated': True}})
    return jsonify({'token': auth_token.decode(), 'name': user['name']})

# request body: {email: string, token: string}
# response body: {message: string}
@app.route('/logout', methods=['POST'])
def logout():
    users = client.CardDeck.users
    data = request.get_json(force=True)
    user = users.find_one({'email': data['email']})
    # if not user['authenticated']:
    #     return response('NOT_AUTHENTICATED', 400)
    if not data.get('token'):
        return response('NO_TOKEN_PROVIDED', 403)

    resp = util.decode_auth_token(data['token'], client)
    if resp is not None:
        client.CardDeck.blacklist_tokens.insert_one(
            {'token': data['token'], 'createdAt': datetime.datetime.now()})
        users.update_one(user, {'$set': {'authenticated': False}})
        return jsonify({'message': 'success'})

# request body: None
# response body: [{name: string, authenticated: boolean}]
@app.route('/users', methods=['GET'])
def get_authenticated_users():
    users = client.CardDeck.users
    names = list(users.find())
    for i in range(len(names)):
        names[i] = {'name': names[i]['name'],
                    'authenticated': names[i]['authenticated']}
    return jsonify(names)

# request body: {email: string, authenticated: boolean}
# response body: {message: string}
@app.route('/change-status', methods=['POST'])
def change_status():
    users = client.CardDeck.users
    data = request.get_json(force=True)
    user = users.find_one({'email': data['email']})
    if not user:
        return response('EMAIL_NOT_FOUND', 400)
    if user['authenticated']:
        return response('ALREADY_AUTHENTICATED', 400)
    users.update_one(user, {'$set': {'authenticated': data['authenticated']}})
    return jsonify({'message': 'success'})


@app.route('/cards', methods=['GET'])
def cards():
    global deck
    if deck == []:
        deck = list(client.CardDeck.card_deck.find())
        random.shuffle(deck)
    cards = deck[-10:]
    deck = deck[:-10]
    return dumps(cards)


@app.route('/reset-cards', methods=['POST'])
def post_cards():
    global deck
    deck = list(client.CardDeck.card_deck.find())
    random.shuffle(deck)
    return jsonify({'message': 'success'})


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
