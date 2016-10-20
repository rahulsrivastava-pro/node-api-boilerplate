var mongoose = require('mongoose');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('nconf'); // get our config file
var User = require('../models/api_user'); // get our mongoose model


module.exports = function (apiRoutes) {
  'use strict';
 
  apiRoutes.post('/authenticate', function (req, res) {

      // find the user
      User.findOne({
          name: req.body.name
      }, function (err, user) {

          if (err) throw err;

          if (!user) {
              res.json({ success: false, message: 'Authentication failed. User not found.' });
          } else if (user) {

              // check if password matches
              if (user.password != req.body.password) {
                  res.json({ success: false, message: 'Authentication failed. Wrong password.' });
              } else {

                  // if user is found and password is right
                  // create a token
                  var token = jwt.sign(user, config.get('jwt:secret'), {
                      expiresIn: 60 * 60 * 24 // expires in 24 hours
                  });

                  // return the information including token as JSON
                  res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                  });
              }

          }

      });
  });


    // TODO: route middleware to verify a token

  apiRoutes.use(function (req, res, next) {

      // check header or url parameters or post parameters for token
      var token = req.body.token || req.query.token || req.headers['x-access-token'];

      // decode token
      if (token) {

          // verifies secret and checks exp
          jwt.verify(token, config.get('jwt:secret'), function (err, decoded) {
              if (err) {
                  return res.json({ success: false, message: 'Failed to authenticate token.' });
              } else {
                  // if everything is good, save to request for use in other routes
                  req.decoded = decoded;
                  next();
              }
          });

      } else {

          // if there is no token
          // return an error
          return res.status(403).send({
              success: false,
              message: 'No token provided.'
          });

      }
  });

    // route to return all users (GET http://localhost:8080/api/users)
  apiRoutes.get('/apiusers', function (req, res) {
      User.find({}, function (err, users) {
          res.json(users);
      });
  });
};
