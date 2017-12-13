// dashboard will only show current coins owned

const express = require('express');
const router  = express.Router();

const isAuthenticated = require('../config/middleware/isAuthenticated');
const dashboard_controller = require('../controllers/dashboard_controller');


// router.get('/', isAuthenticated, dashboard_controller.index); uncomment when testing authorization
    // router.get('/signup', dashboard_controller.signupPage);
    // router.get('/sign-out', dashboard_controller.signout);
// router.post('/addCoin', dashboard_controller.addCoin)
// router.get('/', dashboard_controller.allcoin);

    
    

router.get('/', isAuthenticated, dashboard_controller.index);
router.get('/userData', isAuthenticated, dashboard_controller.userData);
router.get('/coinbase_auth', dashboard_controller.auth);
router.post('/addCoin', isAuthenticated, dashboard_controller.addCoin);

// router.get('/', isAuthenticated, dashboard_controller.index); will use this when authenication is implemented
// router.post('/new', dashboard_controller.search);

module.exports = router;