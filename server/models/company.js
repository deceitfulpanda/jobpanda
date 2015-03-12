/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var Locations = require('./location'),
var Industry 	= require('./industry');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Location = db.Model.extend({
	tablename: 'companies',
	locations: function(){
		return this.hasMany(Locations);
	},
	industries: function(){
		return this.belongsTo(Industry, 'industry_id');
	}
});

module.exports = Company;