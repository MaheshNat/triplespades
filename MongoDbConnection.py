import mongoengine as me

DB_URI = "mongodb+srv://helli:Password!@cluster0-rmyoh.mongodb.net/test?retryWrites=true&w=majority"

class FamousQuote(me.Document):
    text = me.StringField()

me.connect( "CardDeck", host=DB_URI)

my_quote = FamousQuote()
my_quote.text = "Intelligent quote test quote"
my_quote.save()

print(my_quote.to_json(indent=4))