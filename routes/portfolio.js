var express = require('express');
var router  = express.Router();

var portfolio_controller = require('../controllers/settings_controller');

router.get('/portfolio', portfolio_controller.index);

router.post('/portfolio', portfolio_controller.storeCoin);

module.exports = router;