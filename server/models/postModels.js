import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    createdBy:String,
    postImage:String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const PictifyImage = mongoose.model('PictifyImage',postSchema)