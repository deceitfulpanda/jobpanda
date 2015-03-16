/*==================== REQUIRE DEPENDENCIES ====================*/
var express     = require('express'),
    bodyParser  = require('body-parser'),
    passport    = require('passport'),
    http        = require('http');

/*===================== INITIALIZE EXPRESS =====================*/
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*===================== INITIALIZE ROUTERS =====================*/
// var userRouter = express.Router();
// var listingRouter = express.Router();

/*================== CONFIGURE EXPRESS MODULES =================*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log(__dirname);

/*===================== SET EXPRESS ROUTES =====================*/
// app.use('/api/users', userRouter);
// app.use('/api/listings', listingRouter);

/*=================== SET ROUTER DEPENDENCIES ==================*/
// require('../routes/userRoutes.js')(userRouter);
// require('../routes/listingRoutes.js')(listingRouter);

/*================== EXPORT EXPRESS TO MODULE ==================*/
module.exports = app;