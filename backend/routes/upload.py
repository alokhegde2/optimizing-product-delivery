from flask import Flask, request, jsonify, Blueprint
import requests
from bson.objectid import ObjectId

from database import mongoClient

upload = Blueprint('upload', __name__)

# Uploading file url
# This route to upload file which is majorly in xlsx or csv format
# This is not yet done
# I'm planing to keep this for future scope


@upload.route('/upload_file', methods=["GET"])
async def upload_file():
    fileUrl = request.json["fileUrl"]

    opdData = {
        "datatype": "file",
        "data": [],
        "fileUrl": fileUrl,
    }

    try:
        dataId = mongoClient.db.OPD_Data.insert_one(opdData)
    except Exception as e:
        return jsonify(
            message="Error Occured",
            error=e,
        ), 400

    return jsonify(
        message="Data Added Successfully"
    ), 200


# Uploading data through form
# This route to add data to the db
# It recives data from the form which is implemented in React.js
# And it stores those data into the Mongodb atlas

@upload.route('/upload_form', methods=["POST"])
async def upload_form():
    # Getting address from the request body

    address = request.json["address"]

    # Here opdData is the data format which will be got saved in the database

    opdData = {
        "datatype": "form",
        "data": address
    }
    
    
    # Refined list ; Created because the data coming from the ui has some extra fields
    # To remove those fields and to keep only usefull fields
    
    refList = []
    
    for i in address:
        refList.append(i["address"])
    
    N=[]
    E=[]
        
        
    for i in lst:
        url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+i+".json?access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg"
        response = requests.request("GET",url ).json()
        #print(response["features"][2]['geometry']['coordinates'])
        N.append(response["features"][2]['geometry']['coordinates'][1])
        E.append(response["features"][2]['geometry']['coordinates'][0])
    
    opt_url = ''
    for i in range(len(N)):
        opt_url+=str(E[i])+','+str(N[i])+';'
    opt_url=opt_url[:-1]
    url = "https://api.mapbox.com/optimized-trips/v1/mapbox/driving/"+opt_url+"?access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg"
    #print(url)
    response = requests.request("GET",url ).json()
    #print(response)

    ans=[]
    for i in range(len(N)):
        ans.append((lst[i], response['waypoints'][i]['waypoint_index']))
    def Sort_Tuple(tup):
        return(sorted(tup, key = lambda x: x[1])) 
    sorted_tuple = Sort_Tuple(ans)
    sorted_place=[]
    for i in sorted_tuple:
        sorted_place.append(i[0])
    print(sorted_place)

    link = ''
    for i in sorted_place:
        link+=i+'/'
    url = "https://www.google.com/maps/dir/"+link
    print(url)

    # TODO: Uncomment to save data to the data base
    # try:
    #     # Here we are  running querry to insert data to the databse

    #     dataId = mongoClient.db.OPD_Data.insert_one(opdData)
    # except Exception as e:

    #     # Catching exception which will be raised during insert operation

    #     return jsonify(
    #         message="Error Occured",
    #         error=e,
    #     ), 400

    # If data got stored properly in database, Returning the id of the document to the insterface for future reference

    return jsonify(
        documentId=url
    ), 200

    # # place= 'Attavar'
    # # res =  requests.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?limit=2&access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg")
    # # data =  res.json();
    # # # print()
    # # cordinates = data["features"][1]["geometry"]["coordinates"]
    # res = requests.get("https://api.mapbox.com/optimized-trips/v1/mapbox/driving-traffic/74.836152,12.890433;74.838805,12.885046;74.84764,12.861803?access_token=pk.eyJ1IjoiYWxsZW5wZXRlciIsImEiOiJjbDJqN2V4eWYwdTR4M2pwOThpaXkxdnZ0In0.pmQrDt3zVDstenMMZF5xvg")
    # data =  res.json();
