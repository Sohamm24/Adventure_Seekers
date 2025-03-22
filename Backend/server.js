const isWeatherCompitable = require('./controllers/weatherCompitable');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const mongo_uri=process.env.DATABASE_URL
const attractions = require('./models/attractions');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
  }));

mongoose.connect(mongo_uri)
     .then(()=>{
        console.log("MongoDB connected")
     }).catch((err)=>{
        console.log("Error connecting mongoDB: ",err)
     })

     app.get('/api/attractions', async (req, res) => {
        try {
            const attraction = await attractions.find()
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    app.get('/search',async(req,res)=>{
        try{
        const searchQuery=req.query.query;
        console.log(searchQuery)
        const result=await attractions.find({
            $text: {
                $search:searchQuery,
                $caseSensitive:false,
                $diacriticSensitive:false
            }
         })
         res.json(result)}catch (error) {
            console.error("Error fetching attractions:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }) 

    app.get('/api/filters',async(req, res)=>{
        const {agegroup,budget,taluka}=req.body
        if(!agegroup || !budget || !taluka){
         return res.status(400).json({ error: 'All parameters are required' });
        }
        try{
           const response=fetch("")
        }catch(error){

        }
    })
    const checkWeather = async (req, res) => {
        console.log("Checking weather conditions...");
        await isWeatherCompitable(req, res);  
    };

app.get('/weather-check', checkWeather);    

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
