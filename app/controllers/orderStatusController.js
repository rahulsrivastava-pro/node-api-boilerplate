var _orderStatusService = require('../services/orderStatusService.js');


var getOrderStatus = function (req, res) {
    return _orderStatusService.getOrderStatus().then(function (r) {
        return res.json(r);
    });
}

var getOrderStatusById = function (req, res) {
    return _orderStatusService.getOrderStatusById(req.params.id).then(function (r) {
        return res.json(r);
    });
}

var createOrderStatus = function (req, res) {
    //console.log(req.body.OrderStatusName);
    //console.log(req.body.IsActive);

    return _orderStatusService.createOrderStatus(req.body.OrderStatusName, req.body.IsActive).then(function (r) {
        return res.json(r);
    });
}

module.exports = {
    getOrderStatus: getOrderStatus,
    getOrderStatusById: getOrderStatusById,
    createOrderStatus: createOrderStatus
};
