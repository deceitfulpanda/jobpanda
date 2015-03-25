/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
		User 			= require('./user'),
		Field 		= require('./field'),
		Position 	= require('./position'),
		JobUser   = require('./job_user'),
		Source    = require('./source'),
		JobSkill  = require('./job_skill'),
		Skill     = require('./skill'),
		Locations = require('./location');

//Set Table Relationships
var Listing = db.Model.extend({
	tableName: 'listings',
	fields: function(){
		return this.belongsTo(Field, 'id');
	},
	positions: function(){	
		return this.belongsTo(Position, 'id');
	},
	locations: function(){
		return this.belongsTo(Locations, 'id');
	},
	sources: function(){
		return this.belongsTo(Source, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Listing;