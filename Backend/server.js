const isWeatherCompitable = require('./controllers/weatherCompitable');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const mongo_uri=process.env.DATABASE_URL
const attractions = require('./models/attractions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(mongo_uri)
     .then(()=>{
        console.log("MongoDB connected")
     }).catch((err)=>{
        console.log("Error connecting mongoDB: ",err)
     })

     app.get('/api/attractions', async (req, res) => {
        try {
            console.log("Entered")
            const attraction = await attractions.find();
            res.json(attraction);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    const checkWeather = async (req, res) => {
        console.log("Checking weather conditions...");
        await isWeatherCompitable(req, res);  
    };

app.get('/weather-check', checkWeather);    

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
