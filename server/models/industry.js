/*================ REQUIRE DEPENDENCIES ================*/
var db 				= require('../config/config'),
    Companies 	= require('./company');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var Position = db.Model.extend({
	tableName: 'industries',
	companies: function(){
		return this.hasMany(Companies);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = Position;