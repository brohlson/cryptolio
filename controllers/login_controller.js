// dashboard will only show current coins owned

const db  = require('../models');
const express = require('express');
// const request = require("request");



// var isAuthenticated = require("../config/middleware/isAuthenticated");


exports.signUpUser = function(req, res) {

  db.user.findOrCreate({
    where:{email:req.body.email}, defaults:{password:req.body.password}
  }).spread((user, created)=> {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  })

  // db.user.findAll({
  //   where: {email: req.body.email}
  // }).then(function(users) {
  //   console.log("users");
  //   console.log(users);
  //   if (users.length > 0) {
  //     res.json({
  //       duplicateUser: true
  //     });
  //   //At some point, make sure that only one user can be associated with an email.
  //   } else {
  //     console.log("creating new user");
  //     console.log(req.body.email);
  //     console.log(req.body.password)
  //     db.user.create({
  //       email: req.body.email,
  //       password: req.body.password
  //     }).then(function(newUser) {
  //       console.log(newUser);
  //       // res.send({redirect: '/'});
  //     }).catch(function(err) {
  //       res.json(err);
  //     });
  //   }
  // })
  
};

  
