/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Field = db.Model.extend({
	tableName: 'fields',
	listings: function(){
		return this.hasMany(Listing, 'field_id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Field;