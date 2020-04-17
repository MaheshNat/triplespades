from flask import Flask, render_template

# create a instance of class and name is a placeholder for current module
app = Flask(__name__)


# define a route path for an application
@app.route('/')
def home():
    return render_template('home.html')


# if condition to check name is equal to main to generate a script
if __name__ == '__main__':
    # debug=True is used when we ddnt saved changes by need output to
    app.run(debug=True)
