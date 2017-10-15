var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connection to mongoose
mongoose.connect('mongodb://localhost/androidapp');
var db = mongoose.Connection;
app.get('/', function(req, res){
	res.send('Hope this work');
});
app.listen(3000);
console.log('Running on port 3000');