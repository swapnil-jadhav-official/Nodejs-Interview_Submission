import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const connection = ()=>{
    const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.dspb29q.mongodb.net/?retryWrites=true&w=majority`
    mongoose.set('strictQuery', true);
    mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
    mongoose.connection.on('connected', ()=>{
        console.log('Data base connected successfully')
    });

    mongoose.connection.on('disconnected', ()=>{
        console.log('Data base disconnected');
    });

}

export default connection;