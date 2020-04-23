from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import mongoengine as me
import json
DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'

authenticated_users = []


class User(me.Document):
    email = me.StringField(required=True)
    password = me.StringField(required=True)
    authenticated = me.BooleanField(required=False)

    def __init__(self, email, password, authenticated=False, *args, **kwargs):
        super(me.Document, self).__init__(*args, **kwargs)
        self.email = email
        self.password = password
        self.authenticated = authenticated

    def __str__(self):
        return f'email: {self.email}, password: {self.password}, authenticated: {self.authenticated}'


# create a instance of class and name is a placeholder for current module
app = Flask(__name__)
CORS(app)
me.connect("User", host=DB_URI)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    user = User.objects(email=data['email']).first()
    if user.authenticated:
        return response('ALREADY_AUTHENTICATED', 400)
    if not user:
        return response('EMAIL_NOT_FOUND', 400)
    if user.password != data['password']:
        return response('INVALID_PASSWORD', 400)
    user.authenticated = True
    user.save()
    return jsonify({'email': user.email, 'password': user.password})


@app.route('/logout', methods=['POST'])
def logout():
    data = request.get_json(force=True)
    user = User.objects(email=data['email']).first()
    if not user.authenticated:
        return response('NOT_AUTHENTICATED', 400)
    user.authenticated = False
    user.save()
    return jsonify({'email': user.email, 'password': user.password})


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we ddnt saved changes by need output to
    app.run(debug=True)
