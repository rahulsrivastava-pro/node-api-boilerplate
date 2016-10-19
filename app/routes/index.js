var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();
var config = require('nconf');
var User = require('../models/api_user'); // get our mongoose model

module.exports = function(app) {
  'use strict';
  
    // =======================
    // routes ================
    // =======================
    // basic route
      app.get('/', function (req, res) {
          res.send('Hello! The API is at http://localhost:' + config.get('NODE_PORT') + '/api');
      });


      app.get('/setup', function (req, res) {

          // create a sample user
          var nick = new User({
              name: config.get('api:username'),
              password: config.get('api:password'),
              admin: true
          });

          // save the sample user
          nick.save(function (err) {
              if (err) throw err;

              console.log('User saved successfully');
              res.json({ success: true });
          });
      });


    // Initialize all routes

    // API ROUTES -------------------

    // get an instance of the router for api routes
      var apiRoutes = express.Router();

    //authentication
    require('../authentication/token_authentication')(apiRoutes);


    //require('./users')(apiRoutes);


    // route to show a random message (GET http://localhost:8080/api/)
    apiRoutes.get('/', function (req, res) {
        res.json({ message: 'Welcome to the coolest API on earth!' });
    });

    // apply the routes to our application with the prefix /api
    app.use('/api', apiRoutes);

};

