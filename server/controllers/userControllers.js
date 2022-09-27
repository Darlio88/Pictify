import bcrypt from 'bcryptjs'
import { PictifyUser } from '../models/userModel.js'

var salt = bcrypt.genSaltSync(10);

export const signinUser = async (req, res) =>{
    try{
     const {email, password} = req.body
     const checkedUser = await PictifyUser.findOne({email:email})
     console.log(checkedUser)
     if(!checkedUser) return res.status(403).send("user doesn't exist")
     if(bcrypt.compareSync(password, checkedUser.passwordHash)) return res.status(202).send(checkedUser)
     res.status(404).send("incorrect password")
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const signupUser = async (req, res) =>{
    try{
        
     const {userName,email, password} = req.body
     const testUser = await PictifyUser.findOne({email:email})
     console.log(testUser)
     if(testUser) return res.status(403).send("user already exists")
     var passwordHash = bcrypt.hashSync(password, salt);
     const newUser = await PictifyUser.create({userName,email, passwordHash})
     newUser.save()
     res.status(200).send(newUser)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}