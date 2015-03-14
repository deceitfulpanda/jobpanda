/*==================== REQUIRE DEPENDENCIES ====================*/
var Listings = require('../models/listing.js');

module.exports = {
	getListing: function(req, res, next){
		var token = req.headers['x-access-token'];
    if (!token){
      next(new Error('No token'));
		} else {
			
		}
	}
}