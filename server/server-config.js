var express     = require('express'),
var bodyParser  = require('body-parser'),
var passport    = require('passport'),
var http        = require('http');

var app = express();

app.configure(function(){
	app.use(bodyParser);
	app.use(express.static(__dirname + '/client'));
});

module.exports = app;