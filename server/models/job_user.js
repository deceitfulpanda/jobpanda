/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    User      = require('./user'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var JobUser = db.Model.extend({
	tableName: 'listings_users',
	listings: function(){
		return this.belongsTo(Listing, 'id');
	},
	users: function(){
		return this.belongsTo(User, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = JobUser;