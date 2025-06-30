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
    type:String,
    tags:[{type:mongoose.Types.ObjectId,ref:"Tags"}],
    userId:{type:mongoose.Types.ObjectId,ref:"users",required:true}

})

const LinkSchema = new Schema({
    hash:String,
    userId:{type:ObjectId,ref:"users",required:true,
        unique:true
    }
})
export const LinkModel = mongoose.model("Links",LinkSchema);

export const ContentModel = mongoose.model("content",ContentSchema)

export const UserModel = mongoose.model("users",UserSchema)
