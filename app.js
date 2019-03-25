var express = require("express");
var bodyParser = require("body-parser");
var controler = require('./controler/route');
var expressValidator = require('express-validator');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var url = 'mongodb://localhost/test';
mongoose.connect(url, {useNewUrlParser: true});
var db = mongoose.connection;

// var MongoClient = require('mongodb').MongoClient,format = require('util').format;
// var url = 'mongodb://localhost/test';
// MongoClient.connect(url);

// var db = MongoClient.connection;

var app = express();

app.use(expressValidator());

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// template engine
app.set("view engine", "ejs");
app.use(express.static("./modules"));

app.use(passport.initialize());
app.use(passport.session());

controler(app, urlencodedParser);

app.listen(3000);
console.log("listening to port 3000");
