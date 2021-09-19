const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json());
const dotenv = require('dotenv')


const connectDB = require('./config/db');
dotenv.config({path:'./config/config.env'});
connectDB();

app.use('/',require('./routes/index')) 


app.listen(3000)



