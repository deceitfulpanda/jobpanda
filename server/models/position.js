/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tablename: 'positions',
	listings: function(){
		return this.hasMany(Listing);
	}
});

module.exports = Position;