import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import {databaseConnection} from './config/index.js'

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

app.get('/',(req, res)=>{
    res.status(200).send("welcome home")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`)
})

