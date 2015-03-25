/*================ REQUIRE DEPENDENCIES ================*/
var db 				    = require('../config/config'),
    ListingSkill  = require('./job_skill'),
    Listing 	    = require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Skill = db.Model.extend({
	tableName: 'skills',
	listings: function(){
		return this.belongsToMany(Listing).through(ListingSkill);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Skill;