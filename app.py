from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./shopping.db'
app.config['CORS_HEADERS'] = 'Content-Type, X-Request-With, X-Requested-By, *'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

cors = CORS(app)
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
    # products = [{"id" : "1",
    #             "time": "0:05",
    #             "type": "vestimenta",
    #             "title": "blusa amor de verão",
    #             "desc": "blusa decotada. Cor azul piscina",
    #             "link": "http://www.cea.com.br/moda-feminina/blusas/azul%20marinho",
    #             "image": "http://ph-cdn1.ecosweb.com.br/Web/posthaus/foto/moda-feminina/blusas/blusa-azul-royal-com-decote-diferenciado_121966_301_1.jpg",
    #             "price": "50.00"},
    #             {"id" : "2",
    #             "type": "mobilia",
    #             "title": "Sofá astral",
    #             "desc": "Sofá 3 lugares",
    #             "time": "0:34",
    #             "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB",
    #             "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg",
    #             "price": "17000.00"}]

    products = Product.query.all()
    products = [product.serialize for product in products]
    return jsonify(products=products)



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
