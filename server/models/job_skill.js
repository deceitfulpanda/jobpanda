/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    User      = require('./skill'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var JobSkill = db.Model.extend({
	tablename: 'listings_skills',
	hasTimestamps: true,
	listings: function(){
		return this.belongsTo(Listing, 'job_id');
	},
	skills: function(){
		return this.belongsTo(User, 'skill_id');
	}
});

module.exports = JobSkill;