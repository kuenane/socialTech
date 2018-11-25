const express = require('express')
const router = express.Router()

const UserController = require('../controllers/users')

//create a user
router.post("/signup", UserController.user_signUp_user)
//login users
router.post("/login", UserController.user_login_user)

router.get('/', UserController.user_get_all)
//delete a user
router.delete("/:userId", UserController.user_del_user)

module.exports = router
