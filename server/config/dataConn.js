import mongoose from 'mongoose'
export const databaseConnection = async () =>{
 try {
  await mongoose.connect(process.env.MONGODB_URI_DEV)
 } catch (error) {
  console.log(error)
 }

  
}

