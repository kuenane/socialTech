const Ord = require('../models/order')
const mongoose = require('mongoose')
const Prod = require('../models/product')

//get all orders
module.exports.ord_get_all = (req, res, next) => {
    Ord.find().select('quant _id prodKey')
        .populate('prodKey', 'name price')
        .exec()
        .then(doc => {
            res.status(200).json({
                count: doc.length,
                orders: doc.map(docs => {
                    return {
                        _id: docs._id,
                        prodKey: docs.prodKey,
                        quant: doc.quant,
                        request: {
                            type: 'GET',
                            url: 'http://localhost:3000/orders/' + docs._id 
                        }
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

//create an order
module.exports.ord_create_ord = (req, res, next) => {
    Prod.findById(req.body.prodId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    message: ' Product not found '               })
            }
            const ord = new Ord({
                _id: mongoose.Types.ObjectId(),
                prodKey: req.body.prodId,
                quant: req.body.quant
            })
            //save order
            return ord.save()
        })
        .then(result => {
            console.log(result)
            res.status(201).json({
                message: 'Order Stored',
                createdOrder: {
                    _id: result._id,
                    prodKey: result.prodKey,
                    quant: result.quant,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + result._id
                    }
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

//get order by ID
module.exports.ord_get_byId = (req, res, next) => {
    Ord.findById(req.params.ordId)
        .populate('prodKey')
        .exec()
        .then(order => {
            if (!order) {
                return res.status(404).json({
                    message: 'Order not found'
                })
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/orders/'
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

//delete order
module.exports.ord_del_ord = (req, res, next) => {
    Ord.remove({_id: req.params.ordId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Order deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/orders',
                    body: {
                        productID: 'ID',
                        quantity: 'String'
                    }
                }
            })
        }).catch()
}