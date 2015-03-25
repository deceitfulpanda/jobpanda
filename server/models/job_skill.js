/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Skill     = require('./skill'),
    Listing 	= require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var JobSkill = db.Model.extend({
	tableName: 'listings_skills',
	listings: function(){
		return this.belongsTo(Listing, 'id');
	},
	skills: function(){
		return this.belongsTo(Skill, 'id');
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = JobSkill;