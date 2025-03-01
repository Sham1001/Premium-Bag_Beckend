import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.MONGODB_URL)



const connectDB = async()=>{
   try{
    const connectionMongo = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

   }
   catch(error){
    // console.log(`MONGOBD HAS BEEN UNABLE TO CONNECT ${error.message}`)
    console.log("MnogoDB is not connected due to ", error)
    process.exit(1)
   }
}

export default connectDB