import datetime
import jwt

SECRET_KEY = "secret"

# generates auth token in string from user id
def encode_auth_token(user_id):
    payload = {
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
        'iat': datetime.datetime.utcnow(),
        'sub': user_id
    }
    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm='HS256'
    )

# validates auth token and returns payload
def decode_auth_token(auth_token, client):
    payload = jwt.decode(auth_token, SECRET_KEY)
    is_blacklisted_token = check_blacklist_token(auth_token, client)
    if is_blacklisted_token:
        raise jwt.InvalidTokenError('Please re-login to access the page')
    else:
        return payload['sub']

# checks whether a token exists in the blacklisted collection
def check_blacklist_token(token, client):
    blacklist_tokens = client.CardDeck.blacklist_tokens
    resp = blacklist_tokens.find_one({'token': token})
    if resp:
        return True
    else:
        return False
