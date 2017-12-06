// dashboard will only show current coins owned

const db  = require('../models');
const express = require('express');
// const request = require("request");



// var isAuthenticated = require("../config/middleware/isAuthenticated");


exports.index = function(req, res) {
 
    // db.User.findOne({
    //   where: {
    //     email: req.body.email
    //     email: req.user.email will be this one when we use isAuthenticated inside the routes
    //   }, 
    // include: [db.Coin]
    db.User.findAll({
      include: [db.Coin]
    })
      .then(function(coinResults) {
      console.log(coinResults);
      // res.render('portfolios/portfolios', {
      //   layout: 'main-portfolios',
      //   coins: coinResults
      // });
      // res.json(coinResults);
      res.render('login', {
              layout:'main'
            })
    });
  
  };

  
