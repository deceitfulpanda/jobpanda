/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Source = db.Model.extend({
	tableName: 'sources',
	listings: function(){
		return this.hasMany(Listing);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Source;