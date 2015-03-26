/*================ REQUIRE DEPENDENCIES ================*/
var db 				  = require('../config/config'),
    ListingUser = require('./job_user'),
    bcrypt      = require('bcrypt'),
    Promise     = require('bluebird'),
    Listings 	  = require('./listing');

/*============== SET SCHEMA RELATIONSHIPS ==============*/
var User = db.Model.extend({
	tableName: 'users',
  //if the section below looks very familiar... that's because it is
	initialize: function(){
    this.on('creating', this.hashPassword);
  },
  comparePassword: function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
      callback(isMatch);
    });
  },
  hashPassword: function(){
    var cipher = Promise.promisify(bcrypt.hash);
    // return a promise - bookshelf will wait for the promise
    // to resolve before completing the create action
    return cipher(this.get('password'), null, null)
      .bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
  },
	listings: function(){
		return this.belongsToMany(Listings).through(ListingUser);
	}
});

/*=================== EXPORT MODULE ===================*/
module.exports = User;