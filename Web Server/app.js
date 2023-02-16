"use strict"
// Required modules
const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const router = express.Router();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.engine("ejs",require("ejs").__express);


router.get("/",function(req,res){

    res.render("index",{pagename:"Home"}); // views/index.ejs

});

router.get("/about",function(req,res){

    res.render("about",{pagename:"About"}); // views/about.ejs

});

router.post("/login",function(req,res){
    //console.log(req.body.email);
    //console.log(req.body.password);
    let errors=[];
    if(req.body.email == ""){
        errors.push("Email is required.");
    }
    if(req.body.password == ""){
        errors.push("Password is required.");
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
        errors.push("Email is not valid.");
    }

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(req.body.password)){
        errors.push("Password is not valid.");
    }


    res.render("index",{pagename:"Home",errors:errors});
});



app.use(express.static("public"));
app.use("/",router);
let server = app.listen("8080");