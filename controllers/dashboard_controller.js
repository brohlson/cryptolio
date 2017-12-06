// dashboard will only show current coins owned

const db  = require('../models');
const express = require('express');
// const request = require("request");



// var isAuthenticated = require("../config/middleware/isAuthenticated");

// Dummy controller 
// Simple res.render("index"), api call to coinmarketcap.com 
// exports.index = function(req, res) {
// request('https://api.coinmarketcap.com/v1/ticker/?limit=10', function (error, response, body) {
//   if(error){
//     console.log('error:', error); // Print the error if one occurred
//   }
//   res.render('index', {
//     layout:'main-index',
//     coins: body
//   })
// });
// };

// exports.search = function (req, res) {
//   coin = req.body.coin;
//   request('https://api.coinmarketcap.com/v1/ticker/' + coin , function(error, response, body){
//     if (error){
//       console.log('error:', error);
//     }
//     res.render('index', {
//       layout:'main-index',
//       coin: body
//     })
//   });

exports.index = function(req, res) {
  
    db.User.findOne({
      where: {
        // email: req.user.email
      },
      include: [db.Coin]
    }).then(function(coinResults) {
      console.log(coinResults);
      // res.render('portfolios/portfolios', {
      //   layout: 'main-portfolios',
      //   coins: coinResults
      // });
      // res.json(coinResults);
      res.render('index', {
              layout:'main'
            })
    });
  
  };

  
