import bcrypt from 'bcryptjs'


import { PictifyUser } from '../models/userModel.js'

var salt = bcrypt.genSaltSync(10);
export const singleUser = async (req, res) =>{
    try {
        const id = req.query.id
        console.log(id) 
        console.log(req.query)
        const user = await PictifyUser.findOne({_id:id}).select('userName').select("-_id").lean().exec()
        res.status(201).send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
    }

export const signinUser = async (req, res) =>{
    try{
     const {email, password} = req.body
     const checkedUser = await PictifyUser.findOne({email:email}).lean().exec()
     console.log(checkedUser)
     if(!checkedUser) return res.status(403).send({msg:"user doesn't exist"})
     if(!bcrypt.compareSync(password, checkedUser.passwordHash)) return res.status(404).send({msg:"incorrect password"})
     res.status(201).send(checkedUser)
    
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}

export const signupUser = async (req, res) =>{
    try{
        
     const {userName,email, password} = req.body
     const duplicateUser = await PictifyUser.findOne({email:email}).lean().exec()
 
     if(duplicateUser) return res.status(409).send("user already exists")
     var passwordHash = bcrypt.hashSync(password, salt);
     const newUser = await PictifyUser.create({userName,email, passwordHash})
     newUser.save()
     res.status(200).json(newUser)
     
     console.log(token)
    } catch(err){
        console.log(err)
        res.status(500).send(err)
    }
}