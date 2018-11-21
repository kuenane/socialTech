const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')

const OrdController = require('../controllers/orders')
//get orders
router.get('/', checkAuth, OrdController.ord_get_all)
//create orders
router.post('/', checkAuth, OrdController.ord_create_ord)
//get order details by id
router.get('/:ordId', checkAuth, OrdController.ord_get_byId)
//del order details by id
router.delete('/:ordId', checkAuth, OrdController.ord_del_ord)

module.exports = router