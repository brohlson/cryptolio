var express = require('express');
var router  = express.Router();

var dashboard_controller = require('../controllers/dashboard_controller');

router.get('/', dashboard_controller.index);
router.get('/search', dashboard_controller.search);

module.exports = router;