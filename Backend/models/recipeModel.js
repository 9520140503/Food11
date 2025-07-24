import mongoose from "mongoose";


const RecipeSchema = mongoose.Schema({
    image:{
        type: String,
        required:true,
        match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/, "Please enter a valid image URL"]
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    description:{
        type:String,
        required: true,
        trim: true,
    },
    ingredients:{
        type:[String],
        required:true,
        validate:{
            validator: (arr) => arr.length > 0,
            message: 'Ingredients cannot be empty'
        }
    },
    instructions:{
        type:[String],
        required: true,
        validate: {
            validator: (arr) => arr.length > 0,
            message: 'Ingredients cannot be empty'
        }
    }
},{timestamps: true});

export default mongoose.model('Recipe',RecipeSchema);