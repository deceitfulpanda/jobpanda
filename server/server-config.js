/*==================== REQUIRE DEPENDENCIES ====================*/
var express     = require('express'),
    bodyParser  = require('body-parser'),
    passport    = require('passport'),
    http        = require('http');

/*===================== INITIALIZE EXPRESS =====================*/
var app = express();

/*===================== INITIALIZE ROUTERS =====================*/
var userRouter = express.Router();
var listingRouter = express.Router();

/*================== CONFIGURE EXPRESS MODULES =================*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../client/dist'));


/*===================== SET EXPRESS ROUTES =====================*/
// app.use('/api/users', userRouter);
// app.use('/api/listings', listingRouter);

/*=================== SET ROUTER DEPENDENCIES ==================*/
// require('../routes/userRoutes.js')(userRouter);
// require('../routes/listingRoutes.js')(listingRouter);

/*================== EXPORT EXPRESS TO MODULE ==================*/
module.exports = app;