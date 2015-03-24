/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tableName: 'positions',
	listings: function(){
		return this.hasMany(Listing);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Position;