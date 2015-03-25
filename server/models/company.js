/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Locations = require('./location'),
    Industry 	= require('./industry');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Company = db.Model.extend({
	tableName: 'companies',
	locations: function(){
		return this.hasMany(Locations);
	},
	industries: function(){
		return this.belongsTo(Industry, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Company;