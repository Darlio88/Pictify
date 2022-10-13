import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "PictifyUser"
    },
    postImage:String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    likes:[String]
})

export const PictifyImage = mongoose.model('PictifyImage',postSchema)