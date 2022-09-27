import cloudinaryv2 from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config()
const cloudinary = cloudinaryv2.v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure: true
  }
)

export default cloudinary