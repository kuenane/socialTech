const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//routing api's
const products = require('./routes/api/products')
const customers = require('./routes/api/customers')

const app = express()

//body parser middleware
app.use(bodyParser.json());

//DB config call
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB ...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/products', products)
app.use('/api/customers', customers)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started in port ${port}`));
 