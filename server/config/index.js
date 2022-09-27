import mongoose from 'mongoose'
export const databaseConnection = async () =>{
 mongoose.connect(process.env.MONGODB_URI_DEV,(err)=>{
    if (err) {
        console.error("FAILED TO CONNECT TO MONGODB");
        console.error(err);
      } else {
        console.log("CONNECTED TO MONGODB!!");
      } 
    })
}

