/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listings 	= require('./listing'),
    Company 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Locations = db.Model.extend({
	tableName: 'locations',
	listings: function(){
		return this.hasMany(Listings);
	},
	companies: function(){
		return this.belongsTo(Company, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Locations;