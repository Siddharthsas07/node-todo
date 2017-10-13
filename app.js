var express = require('express');
var app = express();

var mongoose = require('mongoose');

// to set the DB model
var config = require('./config');

// setting up the port
var port = process.env.PORT || 3000;

// setting up the static files folder
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// making connection to db
// no need to disconnect - mongoDb keeps only one connection, which remains open
mongoose.connect(config.getDbConnectionString());


// adding seed data to mongoDB database


app.listen(port);



 