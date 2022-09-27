import express from 'express'
import {signinUser, signupUser} from '../controllers/userControllers.js'
const route = express.Router()

route.post('/signin',signinUser)
route.post('/signup',signupUser)


export default route