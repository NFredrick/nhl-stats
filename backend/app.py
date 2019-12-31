from flask import Flask, jsonify
import requests
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/teams')
def fetch_teams():
    r = requests.get('https://statsapi.web.nhl.com/api/v1/teams')
    teams = r.json()['teams']
    return jsonify({"teams": teams})
