/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    JobSkill   = require('./job_skill'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Skill = db.Model.extend({
	tableName: 'users',
	listings: function(){
		return this.belongsToMany(Listing).through(JobSkill);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Skill;