import mongoose, {Schema} from 'mongoose'

const userSchema = mongoose.Schema({
    email:String,
    userName:String,
    passwordHash:String,
    posts:[String],
})

export const PictifyUser = mongoose.model('PictifyUser',userSchema)