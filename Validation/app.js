"use strict"
//Required modules
let fs = require("fs");
let path = require("path");
let url = require("url");
let http = require("http");
let express = require("express");
let request = require("request");
let bodyParser = require("body-parser");
let ejs = require("ejs");

// Set up router, app to use express, body-parser, and ejs
const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.engine("ejs",require("ejs").__express);

// Routing --------

//Home page
router.get("/",function(req,res){
    //Render the page: index.ejs
    res.render("index",{pagename:"Home"});
});

//Sign up page
router.get("/Signup",function(req,res){
    //Render the page: signup.ejs
    res.render("signup",{pagename:"Signup"});
});

//Form Submission
router.post("/submit",function(req,res){
    console.log(req.body.gender);
    // Errors array
    let errors = [];

    // Blank fields
    if(req.body.fname == "") {
        errors.push("First name must be filled out.");
    }
    if(req.body.lname == "") {
        errors.push("Last name must be filled out.");
    }
    if(req.body.city == "") {
        errors.push("City must be filled out.");
    }
    if(req.body.state == "") {
        errors.push("State name must be filled out.");
    }
    if(req.body.zip == "") {
        errors.push("Zip code must be filled out.");
    }
    if(req.body.age == "") {
        errors.push("Age range must be selected.");
    }
    if(req.body.gender !== "male" && req.body.gender !== "female") {
        errors.push("Gender must be selected.");
    }
    if(req.body.consent !== "yes") {
        errors.push("Consent must be checked.");
    }
    if(req.body.bio == "") {
        errors.push("Bio section must be filled out.");
    }

    // Other stipulations
    if(!/^[a-zA-Z]+$/.test(req.body.fname)){
        errors.push("Invalid first name.")
    }
    if(!/^[a-zA-Z]+$/.test(req.body.lname)){
        errors.push("Invalid last name.")
    }
    if(!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(req.body.city)){
        errors.push("Invalid city.")
    }
    if(!/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(req.body.state)){
        errors.push("Invalid state.")
    }
    if(!/^[0-9]{5}([- /]?[0-9]{4})?$/.test(req.body.zip)){
        errors.push("Invalid zip code.")
    }



    res.render("signup",{pagename:"Signup", errors:errors});
});

// ----------------

// App will use public folder for css/js and express.Router for routing
// server listens on port 8080
app.use(express.static("public"));
app.use("/",router);
let server = app.listen("8080");