import mongoose from "mongoose";


const RecipeSchema = mongoose.Schema({
    image:{
        type: String,
        required:true,
        match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/, "Please enter a valid image URL"]
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    },
    ingredients:{
        type:[String],
        required:true
    },
    instructions:{
        type:[String],
        required: true
    }
},{timestamps: true});

export default mongoose.model('Recipe',RecipeSchema);