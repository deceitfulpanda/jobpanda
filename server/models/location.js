/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Listing 	= require('./listing'),
    Company 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Locations = db.Model.extend({
	tableName: 'locations',
	listings: function(){
		return this.hasMany(Listing)
	},
	companies: function(){
		return this.belongsTo(Company, 'company_id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Locations;