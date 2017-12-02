var db  = require('../models');
var express = require('express');
var router  = express.Router();
// var isAuthenticated = require("../config/middleware/isAuthenticated");

// Dummy controller 
// Simple res.render("index"), api call to coinmarketcap.com 
router.get('/', function(req, res) {

	db.Trip.findAll({
    where: {
    	UserId: req.user.id
    }
  }).then(function(dbTrip) {
  	console.log(dbTrip);
    res.render('trips/trips', {
  		layout: 'main-trips',
  		trip: dbTrip
  	});
  });

});

router.post('/new', function(req, res) {

	// Add id from User onto req.body
	req.body.UserId = req.user.id;

  db.Trip.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
});

module.exports = router;