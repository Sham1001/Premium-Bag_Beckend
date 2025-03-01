import cloudinary from "cloudinary"
// import { response } from "express"
import fs from "fs"      //-------->(fs is known as file system ,we are using it to remove file from our 
                        // local storage once the file has been uploaded to cloudnary or failed to upload on cloudnary )

cloudinary.config({
    cloud_name: "CLOUDINARY_CLOUD_NAME",
    api_key: "CLOUDNIARY_CLOUD_KEY",
    api_secret: "CLOUDNARY_API_KEY",
})

const uploadOnCloudnary = async(localFilePath)=>{
    try{
        if(!localFilePath) return null


        const resourse = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath)
        return response
    }
    catch(error){
        fs.unlinkSync(localFilePath)
        return null
    }
}

const deleteFromCloudnary = async(publicId)=>{
    try{
        if(!publicId) return null

       const result = await cloudinary.uploader.destroy(publicId,{
            resource_type:"auto"
        })
        // console.log(result.result) gives "OK"
        // console.log(result)This is also returns "OK"
        if(result.result !== "OK"){
            console.log(`Failed to delete the file : ${result.result}`)
            return null
        }
        return result
    }
    catch(error){
        console.log(`Unbale to delete the file due to : ${error.message}`)
        return null
    }
}

export {uploadOnCloudnary,deleteFromCloudnary}