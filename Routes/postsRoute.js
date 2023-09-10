const express = require('express')
const router = express.Router()
const {fetchAllPosts, postNewPost, updatePost, deletePost, fetchAPost} = require('../Controller/postController')


// 1. GET Method
router.get('/', fetchAllPosts)

// 2. POST Method
router.post('/', postNewPost)

// 3. PUT Method
router.put('/:id', updatePost)

// 4. Delete Method
router.delete('/:id', deletePost)

// 5. Fetch a Single Post
router.get('/:id', fetchAPost)



module.exports = router