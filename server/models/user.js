/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var JobUser   = require('./job_user'),
var Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var User = db.Model.extend({
	tablename: 'users',
	listings: function(){
		return this.belongsToMany(Listing).through(JobUser);
	}
});

module.exports = User;