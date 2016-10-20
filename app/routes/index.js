var changeCase = require('change-case');
var express = require('express');
var routes = require('require-dir')();
var config = require('nconf');
var User = require('../models/api_user'); // get our mongoose model
var swaggerJSDoc = require('swagger-jsdoc');


// =======================
// swagger api documentation ================
// =======================

var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:4000',
    basePath: '/',
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./app/routes/*.js', './app/authentication/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


// =======================
// swagger api documentation ================
// =======================




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

    //List your routes over here
    //1. authentication
    require('../authentication/token_authentication')(apiRoutes);

    //2. order-status
    require('./orderStatus.js')(apiRoutes);

    //3. menu-category
    require('./menuCategory.js')(apiRoutes);

    // route to show a random message (GET http://localhost:4000/api/)


    apiRoutes.get('/', function (req, res) {
        res.json({ message: 'Welcome to the coolest API on earth!' });
    });


    // serve swagger
    app.get('/swagger.json', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    // apply the routes to our application with the prefix /api
    app.use('/api', apiRoutes);

    // Error handler
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: (app.get('env') === 'development' ? err : {})
        });
        next(err);
    });

};

