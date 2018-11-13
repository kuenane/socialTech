const mongoose = require('mongoose')
const schema = mongoose.schema
const Sequelize = require('sequelize');


//customer schema

const CustomerSchema = Schema({ 
    FirtsName:
    {
        type: String,
        require = true

    },
    LastName:
    {
        type: String,
        require = true
    },
    Username:
    {
        type: String,
        require = true

    },
    Email:
    {
        type: String,
        require = true
    },
    Password:
    {
        type: String,
        require = true
    },
    ReEnter:
    {
        type: String,
        require = true
    },
    Contacts:
    {
        type: int,
        require = true
    },
    Address:
    {
        type: String,
        require = true
    },
    Date:
    {
        type: Date,
        default: Date.now
    }
});

module.exports = customers = mongoose.model('customer', CustomerSchema);