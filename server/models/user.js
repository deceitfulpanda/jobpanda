/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    JobUser   = require('./job_user'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var User = db.Model.extend({
	tablename: 'users',
	listings: function(){
		return this.belongsToMany(Listing).through(JobUser);
	}
});

module.exports = User;