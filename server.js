var express = require('express');

var app = require('./server/server-config.js');

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client/dist'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/dist/landing.html');
});

app.get('/app', function(req, res){
	res.sendFile(__dirname + '/client/dist/landing.html');
});

app.listen(port);

console.log('listening on port: ' + port);