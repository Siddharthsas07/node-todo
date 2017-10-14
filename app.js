var express = require('express');
var app = express();

var mongoose = require('mongoose');

// to set the DB model
var config = require('./config');

// get controllers here to access the end-points 
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');


// add static file folder public
app.use('/', express.static(__dirname + '/public'));


// setting up the port
var port = process.env.PORT || 3000;

// setting up the static files folder
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// making connection to db
// no need to disconnect - mongoDb keeps only one connection, which remains open
mongoose.connect(config.getDbConnectionString(), {useMongoClient: true});

// making api endpoint visible to app.js
setupController(app);
apiController(app);

// adding seed data to mongoDB database


app.listen(port);



 