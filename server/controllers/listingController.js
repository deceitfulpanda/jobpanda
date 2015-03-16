/*==================== REQUIRE DEPENDENCIES ====================*/
var Listing  = require('../models/listing.js'),
    Listings = require('../collections/listings.js');

module.exports = {
	getListing: function(req, res, next){
		var token = req.headers['x-access-token'];
    if (!token){
      next(new Error('No token'));
		} else {
			var user = new User({username: username}).fetch().then(function(found){
				if (found){
					var id = found.user_id;
					Listings.reset().query(function(qb){
						qb.where('user_id', '=', id);
					}).fetch({withRelated: ['users'], require: true}).then(function(listings){
						res.send(200, listings.models);
					});
				}
			});
		}
	}
};