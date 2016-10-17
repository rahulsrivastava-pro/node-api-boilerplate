
'use strict';

var server = require('./initializers/server');
var nconf = require('nconf');
var async = require('async');
var logger = require('./utility/logger');
var db = require('./db_helper/mySql/database.js');
var config = require('./config/configuration.js');

// Load Environment variables from .env file
require('dotenv').load();

config.loadConfigurations(nconf);

logger.info('[APP] Starting server initialization');

// Initialize Modules
async.series([
  function initializeDBConnection(callback) {
    db.validate(callback);
  },
  function startServer(callback) {
    server(callback);
  }], function(err) {
    if (err) {
      logger.error('[APP] initialization failed', err);
    } else {
      logger.info('[APP] initialized SUCCESSFULLY');
    }
  }
);
