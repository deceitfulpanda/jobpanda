/*========== NOT CURRENTLY IN USE ==========*/
var db = require('../config/config.js');
var Listing = require('../models/listing');

var Listings = new db.Collection();

Listings.model = Listing;

module.exports = Listings;