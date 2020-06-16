import bcrypt
import mongoengine as mongoDB
from flask import Flask, jsonify, request, make_response
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from pymongo import MongoClient
from flask_socketio import SocketIO, send, emit
import random
import time
import sys


app = Flask(__name__)
DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'
mongoDB.connect("CardDeck", host=DB_URI)
app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)
cards = MongoClient(DB_URI)


class Cards(mongoDB.Document):
    suit = mongoDB.StringField(required=False)
    rank = mongoDB.StringField(required=True)
    name = mongoDB.StringField(required=True)
    point_value = mongoDB.StringField(required=False)
    image = mongoDB.StringField(required=False)
    received = mongoDB.BooleanField(required=False)

    def __init__(self, suit, rank, name, point_value, image, Received, *args, **kwargs):
        super(mongoDB.Document, self).__init__(*args, **kwargs)
        self.suit = suit
        self.rank = rank
        self.name = name
        self.point_value = point_value
        self.image = image
        self.Received = Received


@app.route('/game-start', methods=['POST'])
def shuffling():
    player_no = 1
    cards = []
    while player_no < 6:
        card_type = ['Clubs', 'Diamond', 'Spades', 'Hearts']
        card_name_S = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_H = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_C = ['A', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        card_name_D = ['A', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        cards.append("Player %s" % player_no)
        player_no = player_no + 1
        number_of_crds_pr_plyr = 0
        while number_of_crds_pr_plyr < 10:
            rand_crd_typ = random.choice(card_type)
            if rand_crd_typ == 'Clubs':
                card_name = random.choice(card_name_C)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_C.remove(card_name)
            elif rand_crd_typ == 'Diamond':
                card_name = random.choice(card_name_D)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_D.remove(card_name)
            elif rand_crd_typ == 'Hearts':
                card_name = random.choice(card_name_H)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_H.remove(card_name)
            elif rand_crd_typ == 'Spades':
                card_name = random.choice(card_name_S)
                number_of_crds_pr_plyr = number_of_crds_pr_plyr + 1
                card_name_S.remove(card_name)
            cards.append(rand_crd_typ)
            cards.append(card_name)
    return response(jsonify(cards), 200)


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp

# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we didn't saved changes by need output to
    app.run(debug=True)