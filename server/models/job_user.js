/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    User      = require('./user'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var JobUser = db.Model.extend({
	tableName: 'listings_users',
	hasTimestamps: true,
	listings: function(){
		return this.belongsTo(Listing, 'listing_id');
	},
	users: function(){
		return this.belongsTo(User, 'user_id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = JobUser;