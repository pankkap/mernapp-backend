const Post = require('../Models/postsModel')

// 1. Get all Notes
const fetchAllPosts = async (req,res)=>{
    const Posts =  await Post.find({})
    res.json(Posts)
}
// 2. Post New Note
const postNewPost = async (req,res)=>{
    
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
       await Post.create(post)

    // 3. Respond back to user
    res.json({message:"New Post Created", post:post})
}

// 3. Update a Post
const updatePost = async(req,res)=>{
    // 1. Get the Post you want to update
    const PostID = req.params.id

    // 2. get the data off from the body
    const updatedPost = {
        title: req.body.title,
        body: req.body.body
    }

    // 3. Update data in the database based on ID
    await Post.findByIdAndUpdate(PostID, updatedPost)

    // 4. Respond back to client
    res.status(200).json({message: "Post Updated", Post:updatedPost})
}

// 4. Delete a Post
const deletePost = async (req,res)=>{
   // 1. Get the Post you want to update
   const PostID = req.params.id

    //2. Based on Id from parameter, we will use Mongoose command to delete the data in the database
    const Post = await Post.findByIdAndDelete(PostID)

    //3. Respond back to client
    res.status(200).json({message:"Post Deleted", Post:Post})
}


// 5. Fetch a Single Post
const fetchAPost = async (req,res)=>{
     // 1. Get the Post you want to update
   const PostID = req.params.id

   //2. Based on Id from parameter, we will use Mongoose command to fetch a Single Record from the database
   const Post = await Post.findById(PostID)
   
   //3. Respond back to client
   res.status(200).json(Post)
}

module.exports = {
                    fetchAllPosts,
                    postNewPost, 
                    updatePost, 
                    deletePost,
                    fetchAPost
}