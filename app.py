from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message" : "It's alive"})


@app.route('/products')
def products():
    products = [{"id" : "1",
                "type": "vestimenta",
                "title": "blusa amor de verão",
                "desc": "blusa decotada. Cor azul piscina",
                "time": "0:05",
                "link": "http://www.cea.com.br/moda-feminina/blusas/azul%20marinho",
                "image": "http://ph-cdn1.ecosweb.com.br/Web/posthaus/foto/moda-feminina/blusas/blusa-azul-royal-com-decote-diferenciado_121966_301_1.jpg",
                "price": "50.00"},
                {"id" : "2",
                "type": "mobilia",
                "title": "Sofá astral",
                "desc": "Sofá 3 lugares",
                "time": "0:34",
                "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB",
                "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg",
                "price": "17000.00"}]
    return jsonify(products=products)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
