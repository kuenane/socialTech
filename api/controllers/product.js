const Prod = require('../models/product')
const mongoose = require('mongoose')

//get all products
module.exports.prod_get_all = (req, res, next) => {
    Prod.find()
        .select('name price color _id')
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                products: doc.map(docs => {
                    return {
                        name: docs.name,
                        price: docs.price,
                        color: docs.color,
                        _id: docs._id,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/products/' + docs._id
                        }
                    }
                })
            }
            // console.log(doc)
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({error: err})
        })
}

//get product by ID
module.exports.prod_get_byId = (req, res, next) => {
    const id = req.params.prodId
    Prod.findById(id)
        .select('name price color _id')
        .exec()
        .then(doc => {
            console.log("From Database", doc)
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products' + id
                    }
                })
            } else {
                res.status(404).json({message: 'No valid entry found for given ID'})
            }
            
        })
        .catch(err => {
             console.log(err)
             res.status(500).json({error: err})
        })
}

//create product
module.exports.prod_create_prod = (req, res, next) => {
    //create new product using the model
    const prod = new Prod({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        price : req.body.price,
        color : req.body.color
    })
    //save product to database
    prod.save()
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Well, we handling Post request',
                createdProduct: {
                    name: result.name,
                    price: result.price,
                    color: result.color,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/' + result._id
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
}

//update product
module.exports.prod_update_prod = (req, res, next) => {
    const id = req.params.prodId
    const updateOps = {}
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    Prod.update({_id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json({
                message: 'Product updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + id
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

//delete product
module.exports.prod_del_prod = (req, res, next) => {
    const id = req.params.prodId
    Prod.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost/products',
                    body: {
                        name: 'String',
                        price: 'Number',
                        color: 'String'
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})})
}