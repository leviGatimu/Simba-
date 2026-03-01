import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/config.js";
import userRoutes from './routes/users.js';

connectDB();

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res)=> {
    res.send("Welcome to homepage");
    res.send("Please type '/users' in the url bar to continue!");

    
})