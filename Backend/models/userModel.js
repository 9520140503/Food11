import mongoose from "mongoose";

const UserScehma = mongoose.Schema({
    full_name : {
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"],
    },
    password:{
        type:String,
        required:true
    },
},{timestamps: true})

export default mongoose.model('User',UserScehma)