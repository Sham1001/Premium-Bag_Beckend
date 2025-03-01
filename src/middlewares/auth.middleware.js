import jwt from "jsonwebtoken"
import { asyncHandler } from "../utils/asyncHandler"
import {apiError} from "../utils/apiError"
// import cookieParser from "cookie-parser"
import {User} from "../models/user.js"
const verifyJWT = asyncHandler(async(req,_,next)=>{
    const token = req.cookies?.accessToken || req.header("Authorization").replace("Bearer ","")
    if(!token){
        throw new apiError(401,"Unauthorized Access")
    }
    const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    const user = await User.findById(decodeToken._id).select("-password -refreshToken")
    if(!user){
        throw new apiError(401,"Invalid Accesstoken")
    }
    req.user = user
    next()
})