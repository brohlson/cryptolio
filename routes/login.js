// dashboard will only show current coins owned

const express = require('express');
const router  = express.Router();
const passport = require('../config/passport');

const login_controller = require('../controllers/login_controller');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// router.get('/', isAuthenticated, dashboard_controller.index); will use this when authenication is implemented
router.get('/loginhome', login_controller.index)
router.post('/signup',login_controller.signUpUser);
router.post('/login', passport.authenticate('local'), login_controller.loginUser);
router.get('/logout', login_controller.logOut);

module.exports = router;