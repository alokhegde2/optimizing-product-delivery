# This is the main file please write all your codes here by cloning this repo
from flask import Flask, request, jsonify
import flask
from routes.upload import upload
from database import mongoClient


# Init app
app = Flask(__name__)

#Connecting to database

mongoClient.init_app(app,uri='mongodb://localhost:27017/OPD')

# register all your routes here

app.register_blueprint(upload, url_prefix="/")


# Run Server
if __name__ == '__main__':
    app.run(debug=True)