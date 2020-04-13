import json
from os.path import abspath, exists

import mongoengine as me
DB_URI = "mongodb+srv://helli:Password!@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w" \
         "=majority"

# Create Model object to represnet Deck class


class CardDeck(me.Document):
    suit = me.StringField(required=True)
    name = me.StringField(required=True)
    rank = me.StringField(required=True)
    point_value = me.IntField(required=True, max_value=30)
    image = me.StringField(required=True)

    def __init__(self, suit, name, rank, point_value, image):
        self.suit = suit
        self.name = name
        self.rank = rank
        self.point_value = point_value
        self.image = image


# Connect to Cloud data base with CardDeck
me.connect("CardDeck", host=DB_URI)


# Load Test Json file containing card deck data
json_card_file = abspath("cardeck.json")
if exists(json_card_file):
    with open(json_card_file) as deckfile:
        deckdata = json.loads(deckfile.read())
        for deck in deckdata:
            my_deck = CardDeck(**deck)
            # Save CardDeck from JSON to DB
            my_deck.save()

# Print Saved objects
print(my_deck.to_json(indent=4))
