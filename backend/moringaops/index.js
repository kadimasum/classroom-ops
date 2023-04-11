const express = require("express"); //requiring express
const app = express(); //using express in app
require("dotenv").config()


const bodyParser = require('body-parser'); //body-parser middleware
const multer = require('multer'); //for file upload

const mysql = require("mysql");
const configurationVars = require("./configuration/constants");
const path = require("path");


// functional classes 
const auth = require('./Authentication/login');  //authentication


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))



//LOGIN (AUTHENTICATE USER, and return accessToken ,get user role)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/login", (req, res) => {
    auth.loginUser(req,res);
})

const port = process.env.PORT
app.listen(
    port, ()=> console.log(`Server Started on port ${port}...`)
)
