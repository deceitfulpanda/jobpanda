/*==================== REQUIRE DEPENDENCIES ====================*/
var listingController = require('../controllers/listingController.js');

/*=================== SET HANDLERS TO ROUTES ===================*/
module.exports = function (app) {
	app.get('/', listingController.checkUser, listingController.getListing);
	app.post('/', listingController.checkUser, listingController.saveListing);
};