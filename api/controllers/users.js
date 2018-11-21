const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

//user sign up
module.exports.user_signUp_user = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'User with this email already exists'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        })
                        user.save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                })
                            })
                    }
                })
            }
        })
}
//user log in
module.exports.user_login_user = (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Authorization failed'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Authorization failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).json({
                        message: 'Authorization successful',
                        token: token
                    })
                }
                return res.status(401).json({
                    message: 'Authorization failed'
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}
//get all users
module.exports.user_get_all = (req, res, next) => {
    User.find()
        .select('email _id')
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                products: doc.map(docs => {
                    return {
                        email: docs.email,
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
//delete user
module.exports.user_del_user = (req, res, next) => {
    User.remove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}