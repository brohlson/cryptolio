var db  = require('../models');
var express = require('express');

exports.index = function(req, res) {

	db.User.findOne({
    where: {
    	email: req.user.email
    },
    include: [db.Coin]
  }).then(function(coinResults) {
  	console.log(coinResults);
    res.render('portfolios/portfolios', {
  		layout: 'main-portfolios',
  		coins: coinResults
  	});
  });

};

exports.storeCoin = function(req, res) {

  db.Coin.create(req.body).then(function(dbCoin) {
    res.json(dbPost);
  });
});

module.exports = router;