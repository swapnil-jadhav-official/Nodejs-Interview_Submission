# Nodejs-Interview_Submission

### Restaurant App - Manual Testing

This is a simple restaurant app that provides a RESTful API for performing CRUD (Create, Read, Update, Delete) operations on 
restaurant data. This README provides instructions for manually testing the API endpoints using Thunder Client.

Prerequisites
Node.js and npm installed on your machine.
The restaurant app server is running locally or accessible through a URL.
installation
Step 1
clone the repository to your local machine.
step 2
install the dependencies using npm
npm install 
step 3 
start the server
npm start
step 4
use postman js or thunder client for manual testing.


/****Create a new restaurant***

    POST http://localhost:8000/restaurants
    Content-Type: application/json

    {
        "restaurant_name": "Sample Restaurant",
        "address": "Sample Address",
        "vegOnly": true,
        "cost": "Low",
        "cusineTypes": ["Italian"],
        "isOpen": true
    } */
    
    /*****Get all restaurants*****
    GET http://localhost:8000/restaurants*/
    
    /****** Get a restaurant by ID***
    GET http://localhost:8000//restaurants/{restaurant_id}*/
    
    /*****Update a restaurant by ID****
    PUT http://localhost:8000/restaurants/{restaurant_id}
    Content-Type: application/json

    {
        "restaurant_name": "Updated Restaurant Name",
        "address": "Updated Address",
        "vegOnly": false,
        "cost": "Medium",
        "cusineTypes": ["Italian", "French"],
        "isOpen": true
     }*/
     
     // ****Delete a restaurant by ID****

    //DELETE http://localhost:8000//restaurants/{restaurant_id}
    
