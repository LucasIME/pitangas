from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message" : "It's alive"})

@app.route('/visa')
def visa():
    return render_template('visa.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
