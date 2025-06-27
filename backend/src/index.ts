import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import { UserModel } from "./db";
import { ContentModel } from "./db";
import { auth } from "./middleware";
const app = express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

   try {
    await UserModel.create({
        username,
        password
    })

    res.json({
        message:"sign up complete"
    })
   } catch(e) {
    res.status(411).json({
        message:"duplicate username"
    })
   }
})
app.post("/signin",async(req,res)=>{
       const username = req.body.username
    const password = req.body.password
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
      const token =  jwt.sign({
        id:existingUser._id
        },JWT_SECRET)

        res.json({
            token
        })
    } 
    else {
        res.json({
            message:"incorrect credentials"
        })
    }

})

app.post("/content",auth,async(req,res)=>{
const link = req.body.link
const title = req.body.title

await ContentModel.create({
    link,
    title,
    //@ts-ignore
    userId:req.userId,
    tags:[]
})

res.json({
    message:"Content added"
})
})


app.get("/content",auth,async(req,res)=>{
    // @ts-ignore
const userId = req.userId
// console.log(userId);


const content = await ContentModel.find({
   userId:userId
}).populate("userId","username")

res.json({
    content
})
})

app.delete("/content",auth,async(req,res)=>{
    const contentId = req.body.contentId

    await ContentModel.deleteMany({
        contentId:contentId,
        //@ts-ignore
        userId:req.userId
    })

    res.json({
        message:"content deleted"
    })
})

app.post("/brain/share",(req,res)=>{

})
app.get("/brain/:shareLink",(req,res)=>{
    
})

app.listen(3000)