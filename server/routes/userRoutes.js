import express from 'express'
import {signinUser, signupUser, singleUser} from '../controllers/userControllers.js'
const route = express.Router()

route.post('/signin',signinUser)
route.post('/signup',signupUser)
route.get('/user',singleUser)


export default route