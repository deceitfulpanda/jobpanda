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
	// users: function(){
	// 	return this.belongsToMany(User).through(JobUser);
	// },
	fields: function(){
		return this.belongsTo(Field, 'field_id');
	},
	positions: function(){	
		return this.belongsTo(Position, 'position_id');
	},
	locations: function(){
		return this.belongsTo(Locations, 'location_id');
	},
	sources: function(){
		return this.belongsTo(Source, 'source_id');
	}//, 
	// skills: function(){
	// 	return this.belongsToMany(Skill).through(JobSkill);
	// }
});

/*=================== EXPORT MODULE ===================*/
module.exports = Listing;