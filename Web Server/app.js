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

// Express sessions
const session = require("express-session");
app.use(session({secret:"secret",saveUninitialized:true,resave:true}));
var sess;


router.get("/",function(req,res){
    sess = req.session;
    console.log(sess);
    res.render("index",{pagename:"Home",sess:sess}); // views/index.ejs

});

router.get("/about",function(req,res){
    sess = req.session;
    console.log(sess);
    res.render("about",{pagename:"About",sess:sess}); // views/about.ejs

});

// Profile page
router.get("/profile",function(req,res){
    sess = req.session;
    console.log(sess);
    if(typeof(sess)=="undefined" || sess.loggedin != true) {
        var errors = ["Not authenticated user"];
        res.render("index",{pagename:"Home",errors:errors});
    } else {
        res.render("profile",{pagename:"Profile",sess:sess});
    }

});

// Logout method
router.get("/logout", function(req,res){
    sess = req.session;
    console.log(sess);
    sess.destroy(function(err){
        res.redirect("/");
    });
});

router.post("/login",function(req,res){
    sess = req.session;
    console.log(sess);
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

    // write conditional here matching user/pass
    if(req.body.email == "Mike@aol.com" && req.body.password == "abc123"){
        sess.loggedin = true;
        res.render("profile",{pagename:"Profile",sess:sess});
    }else{
        sess.loggedin = false;
        res.render("index",{pagename:"Home",errors:errors, sess:sess});
    }
    
});



app.use(express.static("public"));
app.use("/",router);
let server = app.listen("8080");