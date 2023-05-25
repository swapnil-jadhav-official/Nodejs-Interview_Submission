import express from "express";
import Connection from "./Database/db.js";
import cors from 'cors';
import  {createRestaurant, deleteRestaurantById, getAllRestaurantasync, getRestaurantById, updateRestaurantById } from "./controller/restaurantController.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const port = 8000;

/** HTTP GET REQUEST */
// app.get('/', (req, res) => {
//     res.status(201).json("Home GET Request");
// });

/** start server only when we have valid connection */
Connection();
// .then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log('Cannot connect to the server')
//     }
// }).catch(error => {
//     console.log("Invalid database connection...!");
// })

    /**API Routes */
    //app.use('/api', router)
    /**Start server */
    app.listen(port,()=>{
        console.log (`Your server is running on port http://localhost:${port}`);
    } )


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

    app.post('/restaurants',createRestaurant);

    
    /*****Get all restaurants*****
    GET http://localhost:8000/restaurants*/

    app.get('/restaurants',getAllRestaurantasync);


    
    /****** Get a restaurant by ID***
    GET http://localhost:8000//restaurants/{restaurant_id}*/
    app.get('/restaurants/:id', getRestaurantById);
    


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
    app.put('/restaurants/:id',updateRestaurantById );


    
    // ****Delete a restaurant by ID****

    //DELETE http://localhost:8000//restaurants/{restaurant_id}
    app.delete('/restaurants/:id',deleteRestaurantById );

