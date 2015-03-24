/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Comapny 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tableName: 'industries',
	companies: function(){
		return this.hasMany(Company);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Position;