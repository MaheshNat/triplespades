from flask import Flask, jsonify, request, make_response
import mongoengine as mongoDB
import bcrypt
from flask_bcrypt import Bcrypt


app = Flask(__name__)
DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'
mongoDB.connect("CardDeck", host=DB_URI)
app = Flask(__name__)
bcrypt = Bcrypt(app)


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


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we ddnt saved changes by need output to
    app.run(debug=True)