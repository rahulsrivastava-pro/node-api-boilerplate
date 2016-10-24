/**
* @swagger
* definition:
*   MenuCategory:
*     properties:
*       MenuCategoryId:
*         type: integer
*       MenuCategoryName:
*         type: string
*       Description:
*         type: string
*       DisplayText:
*         type: string
*       MediaId:
*         type: integer
*       IsActive:
*         type: integer
*/
/**
* @swagger
* /api/menucategory:
*   get:
*     tags:
*       - Menu Category
*     description: Returns all Menu Categories
*     produces:
*       - application/json
*     responses:
*       200:
*         description: An array of Menu Categories
*         schema:
*           $ref: '#/definitions/MenuCategory'
*/
/**
 * @swagger
 * /api/menucategory/{id}:
 *   get:
 *     tags:
 *       - Menu Category
 *     description: Returns a single Menu Category
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Menu Category's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single Menu Category
 *         schema:
 *           $ref: '#/definitions/MenuCategory'
 */
 