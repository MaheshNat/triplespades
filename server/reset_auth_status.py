from pymongo import MongoClient

DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'
client = MongoClient(DB_URI)

users = client.CardDeck.users
users_list = list(users.find())
for user in users_list:
    users.update_one(user, {'$set': {'authenticated': False}})

print('done')
