const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true }


    
})

// userSchema.methods.generateHash = function(password)
// {
//     return bcrypt.hashSync(password, bcrypt.genSaltsSync(8), null);
// };

// userSchema.methods.validpassword = function(password)
// {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', userSchema)