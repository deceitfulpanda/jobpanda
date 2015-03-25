/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listings 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tableName: 'positions',
	listings: function(){
		return this.hasMany(Listings);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Position;