/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listings 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Field = db.Model.extend({
	tableName: 'fields',
	listings: function(){
		return this.hasMany(Listings, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Field;