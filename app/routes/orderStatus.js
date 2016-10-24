var _orderStatusController = require('../controllers/orderStatusController.js');

module.exports = function (apiRoutes) {
  'use strict';
 

  apiRoutes.get('/orderstatus', function (req, res) {
      _orderStatusController.getOrderStatus(req, res);
  });

  apiRoutes.get('/orderstatus/:id', function (req, res) {
      _orderStatusController.getOrderStatusById(req, res);
  });

  apiRoutes.post('/orderstatus', function (req, res) {
      _orderStatusController.createOrderStatus(req, res);
  });

};
