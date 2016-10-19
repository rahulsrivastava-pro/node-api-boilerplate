var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('nconf'); // get our config file
var User = require('../models/api_user'); // get our mongoose model


module.exports = function (apiRoutes) {
  'use strict';
 
    // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.get('/apiusers', function (req, res) {
      User.find({}, function (err, users) {
          res.json(users);
      });
  });
};
