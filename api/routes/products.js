const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/checkAuth')

const ProdController = require('../controllers/product')

//Get products 
router.get('/',  ProdController.prod_get_all)
//Post request
router.post('/', checkAuth, ProdController.prod_create_prod)
//using ID
router.get('/:prodId', ProdController.prod_get_byId)

//patching [ updating ]
router.patch('/:prodId', checkAuth,  ProdController.prod_update_prod)
//deleting
router.delete('/:prodId', checkAuth, ProdController.prod_del_prod)

module.exports = router