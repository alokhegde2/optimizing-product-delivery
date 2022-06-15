# This is the main file please write all your codes here by cloning this repo
import os
from flask import Flask, request, jsonify
import flask
from routes.upload import upload
from database import mongoClient

UPLOAD_FOLDER = os.path.dirname(__file__)+"\\files"

# Init app
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#Connecting to database

mongoClient.init_app(app,uri='mongodb://localhost:27017/OPD')

# register all your routes here

app.register_blueprint(upload, url_prefix="/")


# Run Server
if __name__ == '__main__':
    app.run(debug=True)