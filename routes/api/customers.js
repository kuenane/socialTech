const express = require('express')
const router = express.Router()

const customer = require('../../models/customers')

// router.get('/', (req, res) => {
//     customer.find()
//     .sort({date: - 1})
//     .then(customer => res.json(customer))
// });


router.post('/',(req, res) =>{
    const newcustomer = new customer({
        name: req.body.name
    });
    newcustomer.save().then(customer => res.json(customer));
});


//delete
router.delete('/:id', (req, res) =>{
    customer.findById(req.params.id)
    .then(customer => customer.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});
module.exports = router

// router.delete('/:id', (req, res) => {
//     Products.findById(req.params.id)
//     .then(product => product.remove().then(() => res.json({success: true})))
//     .catch(err => res.status(404).json({success: false}))
// }); // because we are already inside the required path

// module.exports = router 


