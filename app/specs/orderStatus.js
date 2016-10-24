/**
* @swagger
* definition:
*   OrderStatus:
*     properties:
*       OrderStatusId:
*         type: integer
*       OrderStatusName:
*         type: string
*       IsActive:
*         type: integer
*   OrderStatus2:
*     properties:
*       OrderStatusName:
*         type: string
*       IsActive:
*         type: integer
*/

/**
* @swagger
* /api/orderstatus:
*   get:
*     tags:
*       - Order Status
*     description: Returns all Order Status
*     produces:
*       - application/json
*     responses:
*       200:
*         description: An array of Order Status
*         schema:
*           $ref: '#/definitions/OrderStatus'
*/
/**
 * @swagger
 * /api/orderstatus/{id}:
 *   get:
 *     tags:
 *       - Order Status
 *     description: Returns a single Order Status
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Order Status's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Order Status
 *         schema:
 *           $ref: '#/definitions/OrderStatus'
 */
 
/**
 * @swagger
 * /api/orderstatus:
 *   post:
 *     tags:
 *       - Order Status
 *     description: Creates a new Order Status
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
 *         description: Order Status object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/OrderStatus2'
 *     responses:
 *       200:
 *         description: Successfully created
 */
