import json
from os.path import abspath, exists

import mongoengine as me
DB_URI = "mongodb+srv://helli:Password!@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w" \
         "=majority"

#Create Model object to represnet Deck class
class CardDeck(me.Document):
    card_type = me.StringField(required=True)
    card_name = me.StringField(required=True)
    card_rank = me.StringField(required=True)
    card_point_value = me.IntField(required=True, max_value=30)
    card_image = me.StringField(required=True)

#Connect to Cloud data base with CardDeck
me.connect( "CardDeck", host=DB_URI)


#Load Test Json file containing card deck data
json_card_file = abspath("cardeck.json")
if exists(json_card_file):
    with open(json_card_file) as deckfile:
        deckdata = json.loads(deckfile.read())
        for deck in deckdata:
            my_deck = CardDeck()
            my_deck.card_type = deck["Type"]
            my_deck.card_name = deck["Card Name"]
            my_deck.card_rank = deck["Rank"]
            my_deck.card_point_value = deck["Pointvalue"]
            my_deck.card_image = deck["Image"]
            #Save CardDeck from JSON to DB
            my_deck.save()

#Print Saved objects
print(my_deck.to_json(indent=4))

