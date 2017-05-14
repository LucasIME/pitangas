from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./shopping.db'
app.config['CORS_HEADERS'] = 'Content-Type, X-Request-With, X-Requested-By, *'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    maker = db.Column(db.String(30), nullable=False)
    type = db.Column(db.String(30), nullable=False)
    title = db.Column(db.String(80), unique=True, nullable=False)
    desc = db.Column(db.Text, nullable=True)
    time = db.Column(db.String(10), nullable=False)
    link = db.Column(db.Text, nullable=False)
    images = db.Column(db.PickleType, nullable=False)
    size = db.Column(db.PickleType, nullable=True)
    price = db.Column(db.String(20), nullable=False)
    option = db.Column(db.String(80), nullable=True)

    def __init__(self, maker, type, title, time, link, images, price):
        self.maker = maker
        self.type = type
        self.title = title
        self.time = time
        self.link = link
        self.images = images
        self.price = price


    def get_desc(self, desc):
        self.desc = desc

    def get_size(self, size):
        self.size = size

    def get_option(self, option):
        self.option = option

    @property
    def serialize(self):
        """Return object data in easily serializeable format"""
        return {
                'id': self.id,
                'maker': self.maker,
                'type': self.type,
                'title': self.title,
                'desc': self.desc,
                'time': self.time,
                'images': self.images,
                'size': self.size,
                'link': self.link,
                'price': self.price,
                'option': self.option
        }


    def __repr__(self):
        return '<Product %r>' % self.title


@app.route('/')
@cross_origin()
def home():
    return jsonify({"message" : "It's alive"})

@app.route('/visa')
@cross_origin()
def visa():
    return render_template('visa.html')

@app.route('/products')
@cross_origin()
def products():
    products = Product.query.all()
    products = [product.serialize for product in products]
    return jsonify(products=products)



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
