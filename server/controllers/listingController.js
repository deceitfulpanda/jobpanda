/*==================== REQUIRE DEPENDENCIES ====================*/
var Listing   = require('../models/listing.js'),
		Position  = require('../models/position.js'),
		Field     = require('../models/field.js'),
		Locations = require('../models/location.js'),
		User      = require('../models/user.js'),
		Source    = require('../models/source.js'),
		Company   = require('../models/company.js'),
    Promise   = require('bluebird'),
    JobUser   = require('../models/job_user.js'),
    Listings  = require('../collections/listings.js');

/*==================== EXPORT CONTROLLER RESPONSE ====================*/
module.exports = {
	getListing: function(req, res, next){
		var results = [];
		var userInfo = {username: 'tester'};
		var newUser = new User({user_name: 'tester'});
		newUser.fetch().then(function(user){
			if (user){
				var id = user.get('user_id');
				new JobUser({user_id: id}).fetchAll().then(function(listings){
					for (var i = 0; i < listings.length; i++){
						var entry = {};
						var temp = i;
						new Listing({listing_id: listings.models[i].get('listing_id')}).fetch().then(function(listing){
							entry.url = listing.get('url');
							entry.employment_type = listing.get('employment_type');
							entry.experience = listing.get('experience');
							entry.salary = listing.get('salary');
							entry.response_type = listing.get('response_type');

							new Field({field_id: listing.get('field_id')}).fetch().then(function(field){
								entry.field = field.get('field_name');
								new Position({position_id: listing.get('position_id')}).fetch().then(function(field){
									entry.position = field.get('position_name');
									new Locations({location_id: listing.get('location_id')}).fetch().then(function(locations){
										entry.location = locations.get('city');
										new Source({source_id: listing.get('source_id')}).fetch().then(function(source){
											entry.source = source.get('source_name');
											results.push(entry);
											console.log(entry);
											console.log(results);
											if (temp === listings.length - 1){
												res.send(results);
											}
										});
									});
								});
							});
						});
					}
				});
			} else {
				console.error('No user by that name!');
				res.send(404);
			}
		});
	},

	saveListing: function(req, res, next){
		//set object for adding params to bookshelf model
		var params = {};
		//initialize non-relation params
		params.url = req.body.jobURL;
		params.employment_type = req.body.company.employmentType;
		params.experience = req.body.company.experience;
		params.salary = req.body.company.salary;
		params.response_type = req.body.responseType;
		console.log(req.body);
		//decrypt token to username

		//find user db entry
		var username = "tester";

		var newUser = new User({user_name: username});
		newUser.fetch().then(function(user){
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
								console.log(foundListing);
								foundListing.save().then(function(newListing){
									var jobUser = new JobUser({listing_id: listing.get('listing_id'), user_id: user.get('user_id')}).save();
									res.send(200);
								});
							}
						});
					} else {
						findField(req.body, params, user, res);
					}
				});
			} else {
				//if no user entry, return 404
				console.error('No user by that name!');
				res.send(404);
			}
		});
	},

	checkUser: function(req, res, next){
	  var loggedIn = req.session ? !!req.session.user : false;
	  if (!loggedIn){
	    res.redirect('/');
	  } else {
	    req.user = loggedIn;
	    next();
	  }
	}
};

/*========== HELPER FUNCTIONS FOR FINDING/CREATING FOREIGN KEY ENTRIES ===========*/

var findField = function(reqBody, params, user, res){
	new Field({field_name: reqBody.field}).fetch().then(function(field){
		if (field){
			params.field_id = field.get('field_id');
			findPosition(reqBody, params, user, res);
		} else {
			new Field({field_name: reqBody.field}).save().then(function(newField){
				params.field_id = newField.get('field_id');
				findPosition(reqBody, params, user, res);
			});
		}
	});
};

var findPosition = function(reqBody, params, user, res){
	new Position({position_name: reqBody.jobTitle}).fetch().then(function(position){
		if (position){
			params.position_id = position.get('position_id');
			findLocation(reqBody, params, user, res);
		} else {
			new Position({position_name: reqBody.jobTitle}).save().then(function(newPosition){
				params.position_id = newPosition.get('position_id');
				findLocation(reqBody, params, user, res);
			});
		}
	});
};

var findLocation = function(reqBody, params, user, res){
	new Locations({city: reqBody.location}).fetch().then(function(location){
		if (location){
			params.location_id = location.get('location_id');
			findSource(reqBody, params, user, res);
		} else {
			new Locations({city: reqBody.location}).save().then(function(newLocation){
				params.location_id = newLocation.get('location_id');
				findCompany(reqBody, newLocation);
				findSource(reqBody, params, user, res);
			});
		}
	});
};

var findCompany = function(reqBody, loc, user){
	new Company({company_name: reqBody.company.name}).fetch().then(function(company){
		if (company){
			loc.set('company_id') = company.get('company_id');
			loc.save();
		} else {
			new Company({company_name: reqBody.company.name}).save().then(function(newCompany){
				loc.set('company_id') = newCompany.get('company_id');
				loc.save().then(function(){
					findIndustry(reqBody, company);				
				})
			});
		}
	});
};

var findIndustry = function(reqBody, company, user){
	new Industry({industry: reqBody.company.industry}).fetch().then(function(industry){
		if (industry){
			company.set('industry_id') = industry.get('industry_id');
			company.save();
		} else {
			new Industry({industry: reqBody.company.industry}).save().then(function(newIndustry){
				company.set('industry_id') = newIndustry.get('industry_id');
				company.save();
			});
		}
	});
};

var findSource = function(reqBody, params, user, res){
	new Source({source_name: reqBody.sourceNetwork}).fetch().then(function(source){
		if (source){
			params.source_id = source.get('source_id');
			newListing(params, user, res);
		} else {
			new Source({source_name: reqBody.sourceNetwork}).save().then(function(newSource){
				params.source_id = newSource.get('source_id');
				newListing(params, user, res);
			});
		}
	});
};
//After saving foreign key tables, create and save listing table
var newListing = function(params, user, res){
	var listing = new Listing(params);
	console.log(params);
	// console.log(user);
	// console.log(params);
	//Set listing relationship to user then save to DB
	listing.save().then(function(newListing) {
		var jobUser = new JobUser({listing_id: listing.get('listing_id'), user_id: user.get('user_id')}).save();
		console.log('success');
	  res.send(200);
	});
};