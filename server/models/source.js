/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listings 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Source = db.Model.extend({
	tableName: 'sources',
	listings: function(){
		return this.hasMany(Listings);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Source;