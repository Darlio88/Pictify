import bcrypt from 'bcryptjs'
import cloudinary from '../utils/cloudinary.js'
import {PictifyImage} from '../models/postModels.js'

export const allPosts = async (req, res) =>{
try {
    const allPosts =await PictifyImage.find({}).select("-_id")   
    res.status(200).json(allPosts) 
} catch (error) {
    console.log(error)
    res.status(500).send(error)
}
}

export const createPost = async (req, res) =>{
    try {
        const {createdBy, postImage} = req.body
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
        res.status(500).send(error)
    }
    }