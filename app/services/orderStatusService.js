var mysql = require('mysql');
var db = require('../../db_helper/mySQL/database.js');

var getOrderStatus = function () {
    var queryString = 'SELECT * FROM OrderStatus;';
    return db.query(queryString).then(function (r) {
        return r;
    });
}

var getOrderStatusById = function (id) {
    var params = [id];
    var queryString = 'SELECT * FROM OrderStatus WHERE OrderStatusId = ? LIMIT 1;';
    return db.query(mysql.format(queryString, params)).then(function (r) {
        return r;
    });
}

module.exports = {
    getOrderStatus: getOrderStatus,
    getOrderStatusById: getOrderStatusById
};

