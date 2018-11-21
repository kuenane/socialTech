const mongoose = require('mongoose')

const OrdSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    prodKey: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quant: { type: Number, default: 1 }
})

module.exports = mongoose.model('Order', OrdSchema)