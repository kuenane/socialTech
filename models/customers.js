const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Sequelize = require('sequelize');


//customer schema

const CustomerSchema = Schema({ 
    FirtsName:
    {
        type: String,
        required: true

    },
    LastName:
    {
        type: String,
        required: true
    },
    Username:
    {
        type: String,
        required: true
      

    },
    Email:
    {
        type: String,
        required: true

    },
    Password:
    {
        type: String,
        required: true
        
    },
    ReEnter:
    {
        type: String,
        required: true

    },
    Contacts:
    {
        type: String,
        required: true
        
    },
    Address:
    {
        type: String,
        required: true
        
    },
    Date:
    {
        type: Date,
        default: Date.now
    }
});

module.exports = customers = mongoose.model('customers', CustomerSchema);