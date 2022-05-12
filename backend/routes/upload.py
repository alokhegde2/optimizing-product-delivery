from flask import Flask, request, jsonify, Blueprint
import requests

from database import mongoClient

upload = Blueprint('upload', __name__)

#Uploading file url

@upload.route('/upload_file', methods=["GET"])
async def upload_file():
    fileUrl = request.json["fileUrl"]

    opdData = {
    "datatype":"file",
    "data":[],
    "fileUrl":fileUrl,
    }

    try:
        dataId = mongoClient.db.OPD_Data.insert_one(opdData);
    except Exception as e:
        return jsonify(
            message="Error Occured",
            error=e,
            ),400


    return jsonify(
        message="Data Added Successfully"
        ),200


# Uploading data through form

@upload.route('/upload_form',methods=["POST"])
async def upload_form():
    address = request.json["address"]

    opdData = {
    "datatype":"form",
    "data":address
    }

    try:
        dataId = mongoClient.db.OPD_Data.insert_one(opdData);
    except Exception as e:
        return jsonify(
            message="Error Occured",
            error=e,
            ),400

    return jsonify(
        message="Data Added Successfully"
        ),200















    # # place= 'Attavar'
    # # res =  requests.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?limit=2&access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg")
    # # data =  res.json();
    # # # print()
    # # cordinates = data["features"][1]["geometry"]["coordinates"]
    # res = requests.get("https://api.mapbox.com/optimized-trips/v1/mapbox/driving-traffic/74.836152,12.890433;74.838805,12.885046;74.84764,12.861803?access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg")
    # data =  res.json();