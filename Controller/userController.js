const User = require('../Models/userModel')

// 1. Get all Notes
const fetchAllUsers = async (req,res)=>{
    const Users =  await User.find({})
    res.json(Users)
}
// 2. Post New Note
const postNewUser = async (req,res)=>{
    
    1. // Recieve Data for Storing into Database from Body
    const post = {
        title: req.body.title,
        body: req.body.body,
        latest: req.body.latest,
        oldest: req.body.oldest,
        liked: req.body.liked,
        disliked: req.body.disliked,
    }

    // 2. Use Mongoose command to store data into MongoDB

    // mongoose command to store the data in DB
    // Command --> model.create(object)
       await User.create(post)

    // 3. Respond back to user
    res.json({message:"New User Created", post:post})
}

module.exports = {
                    fetchAllUsers,
                    postNewUser                   
}