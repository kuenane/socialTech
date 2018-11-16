const express = require('express')
const router = express.Router()

// product model
const Product = require('../../models/products')

// GET
// @route   GET api/products
// @desc    GET all products
// @access  public
router.get('/', (req, res) => {
    Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products))
}); 
// because we are already inside the required path */

// POST
// @route   POST api/products
// @desc    Create a product
// @access  public
router.post('/', (req, res) => {
    //create in memory
    const newProduct = new Product({
        name: req.body.name
    });
    // save
    newProduct.save().then(product => res.json(product));
}); // because we are already inside the required path 


// DEL
// @route   DEL api/products
// @desc    Delete a product
// @access  public
router.delete('/:id', (req, res) => {
    Products.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
}); // because we are already inside the required path

module.exports = router 