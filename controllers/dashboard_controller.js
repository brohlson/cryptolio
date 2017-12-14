// dashboard will only show current coins owned

const db = require('../models');
const express = require('express');
const request = require("request");


exports.index = function (req, res) {
      res.render('index')
};

exports.userData = function(req, res){
      console.log("this is req.user.email " + req.user.email);
      db.user.findAll({
      where: {email: req.user.email},
      include: [db.Coin]
    })
    .then(function (coinResults) {
      let coins =[];
      let coinAmts = [];
      let coinSym = [];
      for(i=0;i<coinResults[0].Coins.length;i++){
        if(coins.indexOf(coinResults[0].Coins[i].coinName) === -1){
          coins.push(coinResults[0].Coins[i].coinName);
          coinSym.push(coinResults[0].Coins[i].coinSymbol);
          let totalCoins = 0;
          for(j=0;j<coinResults[0].Coins.length;j++){
            if(coinResults[0].Coins[i].coinName === coinResults[0].Coins[j].coinName){
              totalCoins += coinResults[0].Coins[j].numCoins;
            }
          }
          coinAmts.push(totalCoins);
        }
      }
      res.json({coinNames: coins, amounts: coinAmts, coinSymbols: coinSym});
    });
}


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
    numCoins: parseFloat(req.body.numCoins),
    userEmail: email
  }


  db.Coin.create(coin).then(function(dbCoin){
    res.json(dbCoin);
  })
}