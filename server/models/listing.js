/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var User 			= require('./user'),
var Field 		= require('./field'),
var Position 	= require('./position'),
var JobUser   = require('./job_user'),
var Source    = require('./source'),
var Locations = require('./location');

//Set Table Relationships
var Listing = db.Model.extend({
	tablename: 'listings',
	users: function(){
		return this.belongsToMany(User).through(JobUser);
	},
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
	}
});

module.exports = Listing;