from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import mongoengine as me
import json
DB_URI = 'mongodb+srv://helli:Password%21@cluster0-rmyoh.mongodb.net/CardDeck?retryWrites=true&w=majority'


class User(me.Document):
    email = me.StringField(required=True)
    password = me.StringField(required=True)

    def __init__(self, email, password, *args, **kwargs):
        super(me.Document, self).__init__(*args, **kwargs)
        self.email = email
        self.password = password

    def __str__(self):
        return f'email: {self.email}, password: {self.password}'


# create a instance of class and name is a placeholder for current module
app = Flask(__name__)
CORS(app)
me.connect("User", host=DB_URI)

# define a route path for an application
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    user = User.objects(email=data['email']).first()
    if not user:
        return response('EMAIL_NOT_FOUND', 400)
    if user.password != data['password']:
        return response('INVALID_PASSWORD', 400)
    return jsonify({'email': user.email})


def response(message, status_code):
    resp = make_response(message)
    resp.status_code = status_code
    resp.mimetype = 'application/json'
    return resp


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we ddnt saved changes by need output to
    app.run(debug=True)
