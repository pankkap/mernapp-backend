const express = require('express')
const router = express.Router()
const {fetchAllUsers, postNewUser} = require('../Controller/userController')


// 1. GET Method
router.get('/', fetchAllUsers)

// 2. POST Method
router.post('/', postNewUser)

module.exports = router