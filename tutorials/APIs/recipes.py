from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
from bson.json_util import dumps

DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'

app = Flask(__name__)
client = MongoClient(DB_URI)
CORS(app)


@app.route('/insert-recipe', methods=['POST'])
def insert_recipe():
    data = request.get_json(force=True)
    if not data.get('name') or not data.get('description'):
        return response('INCOMPLETE_RECIPE', 400)
    recipes = client.CardDeck.recipes
    recipes.insert(
        {'name': data['name'], 'description': data['description']})
    return jsonify({'message': 'SUCCESS'})


@app.route('/get-recipes', methods=['GET'])
def get_recipes():
    recipes = list(client.CardDeck.recipes.find())
    return dumps(recipes)


@app.route('/update-recipe', methods=['PUT'])
def update_recipe():
    data = request.get_json(force=True)
    if not data.get('id'):
        return response('NO_ID_PROVIDED', 400)
    if not data.get('name') or not data.get('description'):
        return response('INCOMPLETE_RECIPE', 400)
    client.CardDeck.recipes.find_one_and_update(
        {'_id': ObjectId(data['id'])}, {'$set': {'name': data['name'], 'description': data['description']}})
    return jsonify({'message': 'SUCCESS'})


@app.route('/delete-recipe', methods=['DELETE'])
def delete_recipe():
    data = request.get_json(force=True)
    if not data.get('id'):
        return response('NO_ID_PROVIDED', 400)
    recipe = client.CardDeck.recipes.find_one_and_delete(
        {'_id': ObjectId(data['id'])})
    return jsonify({'message': 'SUCCESS'})


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


if __name__ == '__main__':
    app.run(debug=True)
