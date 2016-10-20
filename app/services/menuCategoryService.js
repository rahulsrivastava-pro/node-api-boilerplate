var mysql = require('mysql');
var db = require('../../db_helper/mySQL/database.js');

var getMenuCategory = function () {
    var queryString = 'SELECT * FROM MenuCategory;';
    return db.query(queryString).then(function (r) {
        return r;
    });
}

var getMenuCategoryById = function (id) {
    var params = [id];
    var queryString = 'SELECT * FROM MenuCategory WHERE MenuCategoryId = ? LIMIT 1;';
    return db.query(mysql.format(queryString, params)).then(function (r) {
        return r;
    });
}

module.exports = {
    getMenuCategory: getMenuCategory,
    getMenuCategoryById: getMenuCategoryById
};

