var _menuCategoryController = require('../controllers/menuCategoryController.js');

module.exports = function (apiRoutes) {
  'use strict';
 

  apiRoutes.get('/menucategory', function (req, res) {
      _menuCategoryController.getMenuCategory(req, res);
  });


  apiRoutes.get('/menucategory/:id', function (req, res) {
      _menuCategoryController.getMenuCategoryById(req, res);
  });

};
