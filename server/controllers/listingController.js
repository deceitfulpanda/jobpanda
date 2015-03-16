/*==================== REQUIRE DEPENDENCIES ====================*/
var Listing   = require('../models/listing.js'),
		Position  = require('../models/position.js'),
		Field     = require('../models/field.js'),
		Locations = require('../models/location.js'),
		User      = require('../models/user.js'),
		Source    = require('../models/source.js'),
    Promise   = require('bluebird'),
    JobUser   = require('../models/job_user.js'),
    Listings  = require('../collections/listings.js');

module.exports = {
	getListing: function(req, res, next){
		var token = req.headers['x-access-token'];
		//decrypt token to username
    if (!token){
      next(new Error('No token'));
		} else {
			new User({username: username}).fetch().then(function(user){
				if (user){
					var id = user.user_id;
					Listings.query(function(qb){
						qb.where('user_id', '=', id);
					}).fetch({withRelated: ['users', 'fields', 'positions', 'locations', 'sources', 'skills'], require: true}).then(function(listings){
						res.send(200, listings.models);
					});
				} else {
					console.error('No user by that name!');
					res.send(404);
				}
			});
		}
	},

	saveListing: function(req, res next){
		var token = req.headers['x-access-token'];
		//set object for adding params to bookshelf model
		var params = {};
		//initialize non-relation params
		params.url = req.body.url;
		params.employment_type = req.body.employment_type;
		params.experience = req.body.experience;
		params.salary = req.body.salary;
		params.response_type = req.body.response_type;
		//decrypt token to username
		if (!token){
			next(new Error('No token'));
		} else {
			//find user db entry
			new User({username: username}).fetch().then(function(user){
				if (user){
					//if user entry exists, look for listing entry
					new Listing({url: req.body.url}).fetch().then(function(foundListing){
						if (foundListing){
							var userId = user.get('user_id');
							var listingId = foundListing.get('listing_id');
							//if listing entry exists, check joins table to see if user already has listing
							new JobUser({user_id: userId, listing_id: listingId}).fetch().then(function(found){
								if (found){
									//if relationship exists, do nothing
									res.send(201);
								} else {
									//if relationship doesn't exist in joins table, add relationship to joins
									foundListing.users().attach(user).save().then(function(newListing){
										res.send(200);
									});
								}
							});
						} else {
							//use Promise to find field_id or create new field
							Promise.promisify(findField(req.body.field))
							.then(function(foundFieldId){
								params.fieldId = foundFieldId;
								//use Promise to find position_id or create new position
								Promise.promisify(findPosition(req.body.position))
								.then(function(foundPositionId){
									params.positionId = foundPositionId;
									//use Promise to find location_id or create new location
									Promise.promisify(findLocation(req.body.location))
									.then(function(foundLocationId){
										params.locationId = foundLocationId;
										//use Promise to find source_id or create new source
										Promise.promisify(findSource(req.body.source))
										.then(function(foundSourceId){
											params.sourceId = foundSourceId;
											//create new Listing with appropriate Id fields
											var listing = new Listing(params);
											//Set listing relationship to user then save to DB
											listing.users().attach(user).save().then(function(newListing) {
											  res.send(200);
											});
										});
									});
								});
							});
						}
					});
				} else {
					//if no user entry, return 404
					console.error('No user by that name!');
					res.send(404);
				}
			});
		}
	}
};

/*========== HELPER FUNCTIONS FOR FINDING/CREATING FOREIGN KEY ENTRIES ===========*/

var findField = function(reqField){
	new Field({field: reqField}).fetch().then(function(field){
		if (field){
			return field.get('field_id');
		} else {
			field = new Field({field: reqField}).save(function(newField){
			return newField.get('field_id');
			});
		}
	});
};

var findPosition = function(reqPosition){
	new Position({position: reqPosition}).fetch().then(function(position){
		if (position){
			return position.get('position_id');
		} else {
			position = new Position({position: req.body.position}).save(function(newPosition){
				return newPosition.get('position_id');
			});
		}
	});
};

var findLocation = function(reqLocation){
	new Locations({location: reqLocation}).fetch().then(function(location){
		if (location){
			return location.get('location_id');
		} else {
			location = new Locations({location: req.body.location}).save(function(newLocation){
				return newLocation.get('location_id');
			});
		}
	});
};

var findSource = function(reqSource){
	new Source({source: reqSource}).fetch().then(function(source){
		if (source){
			return source.get('source_id');
		} else {
			source = new Source({source: req.body.source}).save(function(newSource){
				return newSource.get('source_id');
			});
		}
	});
};