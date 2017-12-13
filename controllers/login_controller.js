// dashboard will only show current coins owned

const db  = require('../models');
const express = require('express');
// const request = require("request");

exports.index = function (req, res){
  res.render("login");
}


exports.signUpUser = function(req, res) {

  db.user.findOrCreate({
    where:{email:req.body.email}, defaults:{password:req.body.password}
  }).spread((user, created)=> {
    console.log(user.get({
      plain: true
    }))
    console.log(created);
    res.json(created);
  })
  
};

exports.loginUser = function(req,res) {
  res.json("/");
}

exports.logOut = function(req,res){
  req.logout();
  res.redirect("/");
}

  
