from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

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
    products = [{
                    "desc": "blusa decotada. Cor azul piscina", 
                    "id": "1", 
                    "image": "http://ph-cdn1.ecosweb.com.br/Web/posthaus/foto/moda-feminina/blusas/blusa-azul-royal-com-decote-diferenciado_121966_301_1.jpg", 
                    "link": "http://www.cea.com.br/moda-feminina/blusas/azul%20marinho", 
                    "price": "50.00", 
                    "time": "00:05", 
                    "title": "blusa amor de ver\u00e3o", 
                    "type": "vestimenta"
                    }, 
                {
                    "desc": "Sof\u00e1 3 lugares", 
                    "id": "2", 
                    "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
                    "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
                    "price": "17000.00", 
                    "time": "00:10", 
                    "title": "Sof\u00e1 astral", 
                    "type": "mobilia"
                }, 
                {
                    "desc": "Sof\u00e1 3 lugares", 
                    "id": "3", 
                    "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
                    "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
                    "price": "17000.00", 
                    "time": "00:13", 
                    "title": "Sof\u00e1 astral", 
                    "type": "mobilia"
                }, 
                {
                    "desc": "Sof\u00e1 3 lugares", 
                    "id": "4", 
                    "image": "https://static.mobly.com.br/r/540x540/p/Mobly-SofC3A1-3-Lugares-RetrC3A1til-Bourbon-Suede-Bege-9700-657413-1-zoom.jpg", 
                    "link": "https://www.mobly.com.br/moveis/sofas-3-lugares?cagpspn=pla&spall_source=especiais&catargetid=120159870002149561&cadevice=c&gclid=CjwKEAjw3drIBRCOwfC-_qqyjQ8SJADvoWQpdU6U5bUJ4U30r4FXr72t4GDFvWYRYsLQCbrK4wNjEhoCHGTw_wcB&quickview=LI582UP43XQAMOB", 
                    "price": "17000.00", 
                    "time": "00:17", 
                    "title": "Sof\u00e1 astral", 
                    "type": "mobilia"
                }]
    return jsonify(products=products)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
