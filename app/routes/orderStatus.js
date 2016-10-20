var _orderStatusController = require('../controllers/orderStatusController.js');

module.exports = function (apiRoutes) {
  'use strict';
 


    /**
    * @swagger
    * definition:
    *   Puppy:
    *     properties:
    *       name:
    *         type: string
    *       breed:
    *         type: string
    *       age:
    *         type: integer
    *       sex:
    *         type: string
    */

    /**
    * @swagger
    * /api/orderstatus:
    *   get:
    *     tags:
    *       - Puppies
    *     description: Returns all puppies
    *     produces:
    *       - application/json
    *     responses:
    *       200:
    *         description: An array of puppies
    *         schema:
    *           $ref: '#/definitions/Puppy'
    */
  apiRoutes.get('/orderstatus', function (req, res) {
      _orderStatusController.getOrderStatus(req, res);
  });


/**
 * @swagger
 * /api/orderstatus/{id}:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
  apiRoutes.get('/orderstatus/:id', function (req, res) {
      _orderStatusController.getOrderStatusById(req, res);
  });

};
