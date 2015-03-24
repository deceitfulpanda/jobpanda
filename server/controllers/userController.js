/*==================== NOT CURRENTLY IN USE ====================*/

//Because authentication is planned to be session-based, it is simpler to write
//request-handlers directly in server-config.js where session dependency is already required

/*==================== REQUIRE DEPENDENCIES ====================*/
var User = require('../models/user.js');

module.exports = {
	signin: function(req, res, next){
		new User({username: req.body.username}).fetch()
		.then(function(foundUser){
			if (!foundUser){
				new User({username: req.body.username, password: req.body.password}).save().then(function(newUser){
					var user = {};

				});
			} else {
				console.error('User already exists!');
			}
		});
	},

	login: function(req, res, next){
		var username = req.body.username;
	  var password = req.body.password;

	  new User({username: username}).fetch().then(function(user){
	    if( !user ){
	      res.redirect('/');
	    } else {
	      user.comparePassword(password, function(match){
	        if(match) {

	        } else {
	          res.redirect('/')
	        }
	      });
	    };
	  }
	},

	logout: function(req, res, next){

	}
}