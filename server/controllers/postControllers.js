// import bcrypt from 'bcryptjs'
import cloudinary from '../utils/cloudinary.js'
import {PictifyImage} from '../models/postModels.js'
import { PictifyUser } from '../models/userModel.js'


//all posts
export const allPosts = async (req, res) =>{
try {
    const allPosts =await PictifyImage.find({})   
    res.status(200).json(allPosts) 
} catch (error) {
    console.log(error)
    res.status(500).send('server error')
}
}

//create post
export const createPost = async (req, res) =>{
    try {
       
        const {createdBy, postImage} = req.body
        const checkUser = await PictifyUser.findById(createdBy)
        if(!checkUser) return res.status(401).send("User doesn't exist in the database")
        const uploadedResponse = await cloudinary.uploader.upload(
            postImage,{
               upload_preset: "Pictify"
            }
        )
        console.log(uploadedResponse.public_id)
        const newPost = await PictifyImage.create({createdBy, postImage:uploadedResponse.public_id})
        newPost.save()
        res.status(200).send({msg:"new post succesffully created"})
    } catch (error) {
        console.log(error)
        res.status(500).send('server error')
    }
    }

//handle liked
export const handleLiked = async (req, res)=>{
  try {
    const {id} = req.params;
    const userId= req.body.id;
    let getPost = await PictifyImage.findById(id);
    if(!getPost){
        return res.status(400).send("post doesn't exist")
    }
    if(getPost.likes.includes(userId)){
    getPost.likes = getPost.likes.filter(id => id !== userId)
    await getPost.save()
    return res.status(200).send("post Unliked")
    } else {
    getPost.likes.push(userId)
    await getPost.save()
    return res.status(200).send("Post liked")
    }

  } catch (error) {
    console.log(error)
    res.status(500).send("server error")
  }
    
}


//delete user
export const deletePost = async (req, res)=>{
    try {
        const {id} = req.params;
        const getPost = await PictifyImage.findById(id); 
        if(getPost) {
          await getPost.delete()
         return res.status(200).send('User succesfully deleted')
        }  
        res.status(400).send("Post doesn't exist")    
    } catch (error) {
        
    }
}
