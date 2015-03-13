/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Source = db.Model.extend({
	tablename: 'sources',
	listings: function(){
		return this.hasMany(Listing);
	}
});

module.exports = Source;