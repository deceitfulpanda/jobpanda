/*==================== NOT CURRENTLY IN USE ====================*/

//For whatever reason, CORS did not work with a separate routing script, so routing was moved back to server-config.js

/*==================== REQUIRE DEPENDENCIES ====================*/
var listingController = require('../controllers/listingController.js');

/*=================== SET HANDLERS TO ROUTES ===================*/
module.exports = function (app) {
	app.get('/', /*listingController.checkUser,*/ listingController.getListing);
	app.post('/', /*listingController.checkUser,*/ listingController.saveListing);
};