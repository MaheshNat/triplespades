import mongoengine as me
from flask_cors import  CORS
from pymongo import MongoClient
from flask import Flask, jsonify, request, make_response

Db_Url = 'mongodb+srv://helli:Password21%@cluster0-rmyoh.mongodb.net/test?retryWrites=true&w=majority'
client = MongoClient(Db_Url)
app = Flask(__name__)
CORS(app)


@app.route ('/login', methods=['POST'])
def login():
    data=request.get_json(force=True)
    if not data.get('email') or not data.get('password'):
        return response('Incomplete_Data', 400)
    users = client.CardDeck.users
    users.insert(
        {'email': data['email'], 'password': data['password']})
    return jsonify({'message': 'Success'})


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp

if __name__=='__main__':
    app.run(debug=True)
login()