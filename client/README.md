![Demo Gif](https://maheshnat.me/static/media/TripleSpades.a4c96515.gif)

## Inspiration

The inspiration for Triple Spades was that there was no other application out in the market currently that allowed users to play the card game of triple spades in real-time, so we decided to build one ourselves.

## What it does

Triple Spades allows users to play the Indian card game of Triple Spades completely online and in real-time using SocketIO, keeps track of game outcomes in a scoreboard using MongoDB, and allows users to register/log in using our Flask API with JWTs.

## How I built it

For the backend, we made a REST API using the python module Flask with Flask-SocketIO for web socket connections and PyMongo to connect to our MongoDB database. For the frontend, we used the Angular front end javascript framework using the languages Typescript, HTML, and CSS, as well as the UI framework Boostrap. We also used SocketIO in Angular to connect to the server's web socket and trigger / listen to events.

## Challenges I ran into

We ran into many challenges, most being little bugs where the many elements of the game (bidding, trump card selection, partner card selection, gameplay, end game) sometimes conflicted with each other due to bugs in the code and malfunctioning sockets, etc. However, we managed to eventually overcome these bugs and came out with more knowledge about SocketIO in general. Additionally, we ran into some issues trying to implement real-time user statuses as to whether certain users are currently logged in or not, but decided to scrap the feature as it is not integral to the gameplay process in and of itself.

## Accomplishments that I'm proud of

I am proud that we were able to accomplish such a large project and pull through with all the little details and features involved. There are many parts to the game of Triple Spades, and I am proud to say that we have implemented every single one of them in a bug-free, verbose manner. Additionally, we were able to implement features not integral to the gameplay process such as authentication and keeping track of games using a scoreboard.

## What I learned

I learned many new technologies such as SocketIO and Flask, but on a broader scale, I learned how to design the structure of NoSQL databases, how to architect a SocketIO app and create a real-time full-stack web application.

## What's next for Triple Spades

Next, we are planning to add integration for multiple rooms. Probably the biggest disadvantage our card game currently has is to not be able to play multiple games simultaneously, as there is only one game room containing only 5 players, and no more will be able to join and no new rooms can be created. Additionally, we are planning to add the ability to add friend users and see your friends list, invite them to games, chat with them, etc., creating a deeper connection between the players in a game.

## Built With

1. Angular
2. Bootstrap
3. Connect
4. CSS3
5. HTML5
6. Flask
7. Heroku
8. Jira
9. mongodb
10. pymongo
11. Python
12. Socket.IO
13. TypeScript
