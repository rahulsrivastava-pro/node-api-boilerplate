var mysql = require('mysql');
var Promise = require('bluebird');
var config = require('nconf');

var using = Promise.using;
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var pool = mysql.createPool({
    host: config.get('db:host'),
    user: config.get('db:username'),
    password: config.get('db:password'),
    database: config.get('db:database')
});

var getConnection = function () {
 return pool.getConnectionAsync().disposer(function (connection) {
 return connection.destroy();
 });
};


var query = function (command) {
 return using(getConnection(), function (connection) {
 return connection.queryAsync(command);
 });
};


var validate = function (cb) {
  var connection = mysql.createConnection({
      host: config.get('db:host'),
      user: config.get('db:username'),
      password: config.get('db:password'),
      database: config.get('db:database')
  });

  connection.connect(function(err) {
      if (err) {
         // console.log(config.get('db:host'));
      console.log('error occured while connecting to the database.')
      console.log(err.code); // 'ECONNREFUSED'
      console.log(err.fatal); // true
      cb('error');
    }
    else
    {
      cb();
    }
  });
};


module.exports = {
 query: query,
 validate: validate
};



