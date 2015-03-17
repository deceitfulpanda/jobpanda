var express = require('express');

var app = require('./server/server-config.js');

var port = process.env.PORT || 8000;

console.log(process.env.CLEARDB_DATABASE_HOST);
console.log(process.env.CLEARDB_USER);
console.log(process.env.CLEARDB_PW);
console.log(process.env.PG_DB);

app.use(express.static(__dirname + '/client/dist'));

app.listen(port);

console.log('listening on port: ' + port);