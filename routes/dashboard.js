// dashboard will only show current coins owned

const express = require('express');
const router  = express.Router();

const dashboard_controller = require('../controllers/dashboard_controller');
const isAuthenticated = require('../config/middleware/isAuthenticated');

router.get('/', dashboard_controller.index);
// router.get('/', isAuthenticated, dashboard_controller.index); will use this when authenication is implemented
// router.post('/new', dashboard_controller.search);

module.exports = router;