/*==================== REQUIRE DEPENDENCIES ====================*/
var Promise   = require('bluebird'),
    Listing   = require('../models/listing.js'),
		Position  = require('../models/position.js'),
		Field     = require('../models/field.js'),
		Locations = require('../models/location.js'),
		User      = require('../models/user.js'),
		Source    = require('../models/source.js'),
		Company   = require('../models/company.js'),
    JobUser   = require('../models/job_user.js'),
    Listings  = require('../collections/listings.js');

/*==================== EXPORT CONTROLLER RESPONSE ====================*/

// IMPORTANT
// Because of how Bookshelf relationships work and how
// we initially named our table columns, we did not have
// time to go back and remake the database, so we had to
// grab all of our table relationships the hard way. There
// may be value in revisiting the schema setup and renaming
// table primary keys in a way bookshelf likes.

//It was easier for me to implement callback hell in a limited time.
//Promises with bluebird may make for cleaner code.

module.exports = {
	getListing: function(req, res, next){
		//set results array to return as response
		var results = [];
		// mock user info:
		// var userInfo = {username: 'tester'};
		// var newUser = new User({user_name: 'tester'});

		//find user entry in database
		newUser.fetch().then(function(user){
			if (user){
				var id = user.get('id');
				//if the user entry exists, grab user id, and run a query in user/listing joins table
				new JobUser({user_id: id}).fetchAll().then(function(listings){
					//for each listing found, create an object to add to response array
					for (var i = 0; i < listings.length; i++){
						var entry = {};
						var temp = i;
						//grab listing data based on listing_id
						new Listing({id: listings.models[i].get('id')}).fetch().then(function(listing){
							entry.url = listing.get('url');
							entry.employment_type = listing.get('employment_type');
							entry.experience = listing.get('experience');
							entry.salary = listing.get('salary');
							entry.response_type = listing.get('response_type');
							//grab data from related tables based on foreign keys in listing model
							new Field({id: listing.get('id')}).fetch().then(function(field){
								entry.field = field.get('field_name');
								new Position({id: listing.get('id')}).fetch().then(function(field){
									entry.position = field.get('position_name');
									new Locations({id: listing.get('id')}).fetch().then(function(locations){
										entry.location = locations.get('city');
										new Source({id: listing.get('id')}).fetch().then(function(source){
											entry.source = source.get('source_name');
											//once all fields in entry object are added, push object to results array
											results.push(entry);
											if (temp === listings.length - 1){
												//send results in response once we finish pushing the last listing info
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
				//if no user entry exists, send 404
				console.error('No user by that name!');
				res.send(404);
			}
		});
	},

	saveListing: function(req, res, next){
		//set object for adding params to bookshelf model
		var params = {};
		//find user db entry (mock user data)
		var username = "tester";
		var newUser = new User({user_name: username});
		newUser.fetch().then(function(user){
			if (user){
				//if user entry exists, look for listing entry
				new Listing({url: req.body.url}).fetch().then(function(foundListing){
					if (foundListing){
						var userId = user.get('id');
						var listingId = foundListing.get('id');
						//if listing entry exists, check joins table to see if user already has listing
						new JobUser({user_id: userId, listing_id: listingId}).fetch().then(function(found){
							if (found){
								//if relationship exists, do nothing
								res.send(201);
							} else {
								//if relationship doesn't exist in joins table, add relationship to joins
								foundListing.save().then(function(newListing){
									var jobUser = new JobUser({listing_id: listing.get('id'), user_id: user.get('id')}).save();
									res.send(200);
								});
							}
						});
					} else {
						//if listing does not exist, set up job field relationship
						//callback chain that eventually results in new listing entry
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
		//if user session exists, add to req and send to next handler
		//otherwise, redirect back to index
	  var loggedUser = req.session ? !!req.session.user : false;
	  if (!loggedUser){
	    res.redirect('/');
	  } else {
	    req.user = loggedUser;
	    next();
	  }
	}
};

/*========== HELPER FUNCTIONS FOR FINDING/CREATING FOREIGN KEY ENTRIES ===========*/

var findField = function(reqBody, params, user, res){
	//search for job field entry in table
	new Field({field_name: reqBody.field}).fetch().then(function(field){
		//if field exists, add id to params object
		if (field !== null){
			params.field_id = field.get('id');
			//pass params to next related table
			findPosition(reqBody, params, user, res);
		} else {
			//if field doesn't exist, create it and add id to params object
			new Field({field_name: reqBody.field}).save().then(function(newField){
				params.field_id = newField.get('id');
				//pass params to next related table
				findPosition(reqBody, params, user, res);
			});
		}
	});
};

var findPosition = function(reqBody, params, user, res){
	//search for position entry in table
	new Position({position_name: reqBody.jobTitle}).fetch().then(function(position){
		//if position exists, add id to params object
		if (position !== null){
			params.position_id = position.get('id');
			//pass params to next related table
			findLocation(reqBody, params, user, res);
		} else {
			//if position doesn't exist, create it and add id to params object
			new Position({position_name: reqBody.jobTitle}).save().then(function(newPosition){
				params.position_id = newPosition.get('id');
				//pass params to next related table
				findLocation(reqBody, params, user, res);
			});
		}
	});
};

var findLocation = function(reqBody, params, user, res){
	//search for location entry in table
	new Locations({city: reqBody.location}).fetch().then(function(location){
		//if location exists, add id to params object
		if (location !== null){
			params.location_id = location.get('id');
			//pass params to next related table
			findSource(reqBody, params, user, res);
		} else {
			//if location doesn't exist, create it and add id to params object
			new Locations({city: reqBody.location}).save().then(function(newLocation){
				params.location_id = newLocation.get('id');
				//set location-company relationship
				findCompany(reqBody, newLocation);
				//pass params to next related table
				findSource(reqBody, params, user, res);
			});
		}
	});
};

var findCompany = function(reqBody, loc, user){
	//search for company entry in table
	new Company({company_name: reqBody.company.name}).fetch().then(function(company){
		//if company exists, add id to location model and save
		if (company !== null){
			loc.set('company_id') = company.get('id');
			loc.save();
		} else {
			//if company doesn't exist, create it and add id to location model and save
			new Company({company_name: reqBody.company.name}).save().then(function(newCompany){
				loc.set('company_id') = newCompany.get('id');
				loc.save().then(function(){
					//set company-industry relationship
					findIndustry(reqBody, company);				
				})
			});
		}
	});
};

var findIndustry = function(reqBody, company, user){
	//search for industry entry in table
	new Industry({industry: reqBody.company.industry}).fetch().then(function(industry){
		//if industry exists, add id to company model and save
		if (industry !== null){
			company.set('industry_id') = industry.get('id');
			company.save();
		} else {
			//if industry doesn't exist, create it and add id company model and save
			new Industry({industry: reqBody.company.industry}).save().then(function(newIndustry){
				company.set('industry_id') = newIndustry.get('id');
				company.save();
			});
		}
	});
};

var findSource = function(reqBody, params, user, res){
	//search for source entry in table
	new Source({source_name: reqBody.sourceNetwork}).fetch().then(function(source){
		//if source exists, add id to params object
		if (source !== null){
			params.source_id = source.get('id');
			//pass params to next related table
			newListing(reqBody, params, user, res);
		} else {
			//if source doesn't exist, create it and add id to params object
			new Source({source_name: reqBody.sourceNetwork}).save().then(function(newSource){
				params.source_id = newSource.get('id');
				//pass params to next related table
				newListing(reqBody, params, user, res);
			});
		}
	});
};

//After saving foreign key tables, create and save listing table
var newListing = function(reqBody, params, user, res){
	//initialize non-relation params
	params.url = reqBody.jobURL;
	params.employment_type = reqBody.company.employmentType;
	params.experience = reqBody.company.experience;
	params.salary = reqBody.company.salary;
	params.response_type = reqBody.responseType;

	var listing = new Listing(params);
	//Set listing relationship to user then save to DB
	listing.save().then(function(newListing) {
		var jobUser = new JobUser({listing_id: listing.get('id'), user_id: user.get('id')}).save();
	  res.send(200);
	});
};