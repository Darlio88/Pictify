import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import {databaseConnection} from './config/dataConn.js'

//routes
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
dotenv.config()

const app = express()
databaseConnection()
// app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json({limit: '50mb'})); // define the size limit
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));	// define the size limit
app.use(express.json());
app.use(express.json())
app.use(cors())
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

const PORT = process.env.PORT || 4000

mongoose.connection.once('open',(stream)=>{
    console.log("connected to db")
    app.listen(PORT, ()=>{
        console.log(`app running on port ${PORT}`)
    })
})