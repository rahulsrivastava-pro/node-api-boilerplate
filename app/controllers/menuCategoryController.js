var _menuCategoryService = require('../services/menuCategoryService.js');


var getMenuCategory = function (req, res) {
    return _menuCategoryService.getMenuCategory().then(function (r) {
        return res.json(r);
    });
}

var getMenuCategoryById = function (req, res) {
    return _menuCategoryService.getMenuCategoryById(req.params.id).then(function (r) {
        return res.json(r);
    });
}


module.exports = {
    getMenuCategory: getMenuCategory,
    getMenuCategoryById: getMenuCategoryById
};