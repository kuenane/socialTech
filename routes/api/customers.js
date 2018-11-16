const express = require('express')
const router = express.Router()


const Customer = require('../../models/customers')

//GET

router.get('/', (req, res) => {
    Customer.find()
    .select('name lastname username email password reenter contact address')
    .exec()
    .then(doc => {
        const response = {
            count: doc.length,
            customers: doc.map(docs => {
                return{
                    name: docs.name,
                    lastname: docs.lastname,
                    username: docs.username,
                    email: docs.email,
                    password: docs.password,
                    reenter: docs.reenter,
                    contact: docs.contact,
                    address: docs.address,
                    _id: docs._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/customers/' + docs._id
                    }
                }   
            })
        }
        res.status(200).json(response)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({error: err})
    })
});

//POST
router.post('/',(req, res) => {
    const newcustomer = new Customer({
        //_id : new mongoose.Types.ObjectId,
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        reenter: req.body.reenter,
        contact: req.body.contact,
        address: req.body.address
    });
    newcustomer.save().then(customers => res.json(customers));
});

module.exports = router
