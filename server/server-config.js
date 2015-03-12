var express     = require('express'),
var bodyParser  = require('body-parser'),
var passport    = require('passport'),
var http        = require('http');

var app = express();

var userRouter = express.Router();
var listingRouter = express.Router();

app.configure(function(){
	app.use(bodyParser);
	app.use(express.static(__dirname + '/client'));
});

// app.use('/api/users', userRouter);
// app.use('/api/listings', listingRouter);


// require('../routes/userRoutes.js')(userRouter);
// require('../routes/listingRoutes.js')(listingRouter);

module.exports = app;