import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import { LinkModel, UserModel } from "./db";
import { ContentModel } from "./db";
import { auth } from "./middleware";
import { random } from "./utils";
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
        userId:req.userId
    })

    res.json({
        message:"content deleted"
    })
})

app.post("/brain/share",auth,async(req,res)=>{
const share = req.body.share;
if (share) {
    const existingLink = await LinkModel.findOne({
        userId:req.userId
    })
    if (existingLink) {
        res.json({
            hash:existingLink.hash
        })
        return
    }
        const hash = random(10)
   await LinkModel.create({
        userId:req.userId,
        hash:hash
    })
       res.json({
        message:"/share/"+ hash,
        
    })
}
    else {
       await LinkModel.deleteOne({
            userId:req.userId
        })
           res.json({
        message:"removed link"
    })
    }
})
app.get("/brain/:shareLink",async(req,res)=>{
    const hash = req.params.shareLink

   const link = await LinkModel.findOne({
        hash:hash
    })

    if(!link){
        res.status(411).json({
            message:"Sorry incorrect input"
        })
        return
    }

    const content = await ContentModel.find({
        userId:link.userId
    })

    const user = await UserModel.findOne({
        _id:link.userId
    })

    if (!user) {
         res.status(411).json({
            message:"user not found , actually not possible"
        })
        return
    }
    res.json({
        username:user.username,
        content:content
    })
})

app.listen(3000)