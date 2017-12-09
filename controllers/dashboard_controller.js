// dashboard will only show current coins owned

const db  = require('../models');
const express = require('express');
const request = require("request");



// var isAuthenticated = require("../config/middleware/isAuthenticated");

// Dummy controller 
// Simple res.render("index"), api call to coinmarketcap.com 
// exports.allcoin = function(req, res) {
// request('https://api.coinmarketcap.com/v1/ticker/', function (error, response, body) {
//   if(error){
//     console.log('error:', error); // Print the error if one occurred
//   }
//   console.log(JSON.parse(body));
//   res.json(JSON.parse(body));
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

  var coinObj = {};
 
    // db.User.findOne({
    //   where: {
    //     email: req.body.email
    //     email: req.user.email will be this one when we use isAuthenticated inside the routes
    //   }, 
    // include: [db.Coin]
    request('https://api.coinmarketcap.com/v1/ticker/?limit=10', function (error, response, body) {
  if(error){
    console.log('error:', error); // Print the error if one occurred
  }
  db.user.findAll({
    include:[db.Coin]
  })
  .then(function(coinResults){
      coinObj = {
    coin: JSON.parse(body),
    dbResults: coinResults
  };
    res.json(coinObj);
  });
  });

  // console.log(JSON.parse(body));
  // res.json(JSON.parse(body));
    // });
    // db.user.findAll({
    //   include: [db.Coin]
    // })
    //   .then(function(coinResults) {
    //   // console.log(coinResults);
    //   // res.render('portfolios/portfolios', {
    //   //   layout: 'main-portfolios',
    //   //   coins: coinResults
    //   // });
    //   // res.json(coinResults);
    //   res.render('index', {
    //           layout:'main'
    //         })
    // });
  
  };

  // exports.addCoin = function(req, res) {
  //   req.user
  //   db.user.create({

  //   })
  // }

  

  
