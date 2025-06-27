import mongoose, { mongo } from "mongoose";
import { Model,Schema } from "mongoose";
const ObjectId = mongoose.Types.ObjectId

const mongoUrl = process.env.MONGO_URL;
if (!mongoUrl) {
    throw new Error("MONGO_URL environment variable is not defined");
}
mongoose.connect(mongoUrl);

const UserSchema = new Schema({
    username:{type:String,unique:true},
    password:String

})


const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tags"}],
    userId:{type:mongoose.Types.ObjectId,ref:"users",required:true}

})

export const ContentModel = mongoose.model("content",ContentSchema)

export const UserModel = mongoose.model("users",UserSchema)
