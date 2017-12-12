// dashboard will only show current coins owned

const db = require('../models');
const express = require('express');
const request = require("request");


exports.index = function (req, res) {
      console.log("this is req.user.email " + req.user.email);
      db.user.findAll({
      where: {email: req.user.email},
      include: [db.Coin]
    })
    .then(function (coinResults) {
      res.render('index')
    });
};


exports.auth = function (req, res) {
  
  let queryUrl = 'https://www.coinbase.com/oauth/authorize?client_id=292d61271cf240147c550bef04ecb2a33fa1c50b4ecb062a8ce4d0562635a0b9&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2F&response_type=code&scope=wallet%3Auser%3Aread';

  window.location.replace(queryUrl);

  $.get(queryUrl, function (data, status) {
    console.log(data);
  });

};

exports.addCoin = function(req, res) {


  let email = req.user.email;
  let coin = {
    coinName: req.body.coinName,
    coinSymbol: req.body.coinSymbol,
    numCoins: parseInt(req.body.numCoins),
    userEmail: email
  }

  db.Coin.create(coin).then(function(dbCoin){
    res.json(dbCoin);
  })
}