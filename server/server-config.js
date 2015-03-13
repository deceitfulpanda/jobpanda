/*==================== REQUIRE DEPENDENCIES ====================*/
var express     = require('express'),
var bodyParser  = require('body-parser'),
var passport    = require('passport'),
var http        = require('http');

/*===================== INITIALIZE EXPRESS =====================*/
var app = express();

/*===================== INITIALIZE ROUTERS =====================*/
var userRouter = express.Router();
var listingRouter = express.Router();

/*================== CONFIGURE EXPRESS MODULES =================*/
app.configure(fnction(){
	app.use(bodyParser);
	app.use(express.static(__dirname + '../client'));
});

/*===================== SET EXPRESS ROUTES =====================*/
// app.use('/api/users', userRouter);
// app.use('/api/listings', listingRouter);

/*=================== SET ROUTER DEPENDENCIES ==================*/
// require('../routes/userRoutes.js')(userRouter);
// require('../routes/listingRoutes.js')(listingRouter);

/*================== EXPORT EXPRESS TO MODULE ==================*/
module.exports = app;