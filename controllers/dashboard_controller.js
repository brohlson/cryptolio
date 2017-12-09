// dashboard will only show current coins owned

const db = require('../models');
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


// exports.index = function(req, res) { unncomment from here

//   var coinObj = {};
 
//     request('https://api.coinmarketcap.com/v1/ticker/?limit=10', function (error, response, body) {
//   if(error){
//     console.log('error:', error); // Print the error if one occurred
//   }
//   db.user.findAll({
//     include:[db.Coin]
//   })
//   .then(function(coinResults){
//       coinObj = {
//     coin: JSON.parse(body),
//     dbResults: coinResults
//   };
//     res.json(coinObj);
//   });
//   }); to here when sending back api call for coins from db and coinmarketcap

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
  
  // };

  // exports.addCoin = function(req, res) {
  //   req.user
  //   db.user.create({

  //   })
  // }

exports.index = function (req, res) {

  // db.User.findOne({
  //   where: {
  //     email: req.body.email
  //     email: req.user.email will be this one when we use isAuthenticated inside the routes
  //   }, 
  // include: [db.Coin]
  db.user.findAll({
      include: [db.Coin]
    })
    .then(function (coinResults) {
      console.log(coinResults);
      // res.render('portfolios/portfolios', {
      //   layout: 'main-portfolios',
      //   coins: coinResults
      // });
      // res.json(coinResults);
      res.render('index', {
        layout: 'main'
      })
    });

};

exports.auth = function (req, res) {
  
  let queryUrl = 'https://www.coinbase.com/oauth/authorize?client_id=292d61271cf240147c550bef04ecb2a33fa1c50b4ecb062a8ce4d0562635a0b9&redirect_uri=http%3A%2F%2Flocalhost%3A3005%2F&response_type=code&scope=wallet%3Auser%3Aread';

  window.location.replace(queryUrl);

  $.get(queryUrl, function (data, status) {
    console.log(data);
  });

};