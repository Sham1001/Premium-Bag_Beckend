import  connectDB  from "./src/database/db.js"
import dotenv from "dotenv"
import {app} from "./src/app.js"

dotenv.config({
    path:"../.env"
}
)

// console.log(process.env.PORT)
connectDB()
.then(()=>{
    console.log(` MONGOBD HAS BEEN SUCCESSFULLY CONNECTED !!!`)
})
.catch((error)=>{
    console.log("Error connecting to database", error)
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000")
})