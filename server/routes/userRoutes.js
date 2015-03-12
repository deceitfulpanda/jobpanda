/*==================== REQUIRE DEPENDENCIES ====================*/
var userController = require('../controllers/userController.js');

/*=================== SET HANDLERS TO ROUTES ===================*/
module.exports = function (app) {

  app.post('/login', userController.login);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);
  app.get('/logout', userController.logout);
};