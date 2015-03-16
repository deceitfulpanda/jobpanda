/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
var JobSkill   = require('./job_skill'),
var Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Skill = db.Model.extend({
	tablename: 'users',
	listings: function(){
		return this.belongsToMany(Listing).through(JobSkill);
	}
});

module.exports = Skill;