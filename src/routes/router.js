const express = require('express');
const brandController = require("../api/controllers/brand-controller")

const router = express.Router();

/**
 * @swagger
 * components:
 *     schemas:
*          code:
*              type: object
*              required:
*                  - id
*                  - code
*              properties:
*                  id:
*                  type: string
*                  description: the auto-generated id of the discount code
*              example:
*                  id: jh2342jklh3
*                  code: brandjh2342jklh3
 */

/**
 * @swagger
 * tags:
 *      name: Brand
 *      description: show discount code generated
 */

/**
 *
 *@swagger
 * /api:
 *   get:
 *      summery: Returns the list of generated codes
 *      tags: [Brand]
 *      response:
 *      200:
 *          description: should response with json data with all codes available, we will not do pagination for now
 *      content:
 *      application/json:
 *      schema:
 *          type: array
 *          items:
 *              @ref: "#/component/schema/codes"
 */
router.get('/', brandController.brand_greeting)

router.get('/client', (req, res) => {
    res.json({
        "id": "123435324534",
        "user":"logged in user",
        "message":"😎😎All discount codes"
    })
})

// post requests
router.post('/user/set-discount', (req, res) => {
    const body = req.body.user
    if (body.length < 1){
        // throw new Error("❌ you cant have empty string as input")
        res.json(
            {
                error: "❌ you cant have empty string as input"
            }
        )
    }
    res.json({
        "data": body,
        "errors": []
    })
})

module.exports = {
  router,
};
