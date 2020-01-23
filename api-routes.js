// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to server crafted with love!',
    });
});
// Import contact controller
var contactController = require('./controllers/contactController');
var authController = require('./controllers/authController');
var userController = require('./controllers/userController');


// Contact routes
router.route('/signup')
    .get(userController.getAllUsers)
    .post(authController.signup);

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);



router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


// Export API routes
module.exports = router;