var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Routes //
var index = require('./routes/index');

// App Set //
app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

// Routes
app.use('/', index);

// Mongo Connection //
var mongoURI = "mongodb://localhost:27017/users_passport_session";
var mongoDB = mongoose.connect(mongoURI).connection;
mongoDB.on('error', function(err){
      if(err)console.log("Mongo Error", err);
});
mongoDB.once('open', function(){
   console.log("Connected to Mongo");
});


// Listen //
app.listen(app.get("port"), function(){
   console.log("Listening on port: " + app.get("port"));
});