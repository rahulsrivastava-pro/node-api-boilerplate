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
    }).catch(function (e) {
        return "Error Occured while selecting Order Status : " + e.message ;
    });
}

var createOrderStatus = function (name, isactive) {
    var params = [name, isactive];
    var queryString = 'Insert into OrderStatus (OrderStatusName, IsActive) Values (?, ?);';
    console.log(mysql.format(queryString, params));
    return db.query(mysql.format(queryString, params)).then(function (r) {
        return "Order Status Created";
    }).catch(function (e) {
        return "Error Occured while inserting Order Status : " + e.message;
    });
}

module.exports = {
    getOrderStatus: getOrderStatus,
    getOrderStatusById: getOrderStatusById,
    createOrderStatus: createOrderStatus
};

