// var app = require('./server/server-config.js');

/*==================== REQUIRE DEPENDENCIES ====================*/
var express     = require('express'),
    bodyParser  = require('body-parser'),
    passport    = require('passport'),
    http        = require('http');

/*===================== INITIALIZE EXPRESS =====================*/
var app = express();

/*===================== INITIALIZE ROUTERS =====================*/
// var userRouter = express.Router();
// var listingRouter = express.Router();

/*================== CONFIGURE EXPRESS MODULES =================*/
// app.configure(function(){
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
  app.use(express.static(__dirname + '/client/dist'));
// });

// app.get('/', function(req, res){
// 	console.log('hi');
// 	res.send('hi');
// })


var port = process.env.PORT || 8000;

app.listen(port);

console.log('listening on port: ' + port);