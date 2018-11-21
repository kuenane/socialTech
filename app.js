const express = require('express')
const app = express()
const morgan = require('morgan') //logs request info on term
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//routes
const productRoute = require('./api/routes/products')
const orderRoute = require('./api/routes/orders')
const userRoute = require('./api/routes/users')

//connect to mongo DB
mongoose.connect('mongodb://doll:' 
    + process.env.DB_PW + 
    '@ds143893.mlab.com:43893/s4a', {
        useNewUrlParser: true
    }
)

//logger middle ware
app.use(morgan('dev'))
//pass data and make it easy to read [ url, json ...]
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//cors headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === 'OPTION') {
        res.header("Access-Control-Allow-Methods",
        "PUT, GET, POST, PATCH. DELETE")
        return res.status(200).json({})
    }
    next()
})

//set up a middle ware
app.use('/products', productRoute)
app.use('/orders', orderRoute)
app.use('/users', userRoute)

//request error, request beyond api/routes
//create or get error from anywhere in the app
app.use((req, res, next) => {
    const error = new Error('Error: Request Not Found')
    error.status = 404
    next(error)
})
//handle the error now
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app