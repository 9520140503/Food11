import express from "express"
import { Router } from "express"
import AuthMiddleware from "../middleware/AuthMiddleware.js";
import Recipe from "../models/recipeModel.js"

const recipeRouter = Router();

//create a new recipe
recipeRouter.post('/add',AuthMiddleware,async(req,res) => {
    const {imageUrl,title,description,ingredients,instructions} = req.body;
    const Id = req.userId;
    try {
        const recipe = await Recipe.create({
            image: imageUrl,
            createdBy: Id,
            title,
            description,
            ingredients,
            instructions
        })

        if(recipe){
            return res.status(201).json({message: "Recipe added successully"})
        }
    } catch (error) {
        console.log("Add Recipe Error: ",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
})

//Get all recipes:
recipeRouter.get('/',AuthMiddleware, async(req,res) => {
    const userId = req.userId;
    try {
        const recipes = await Recipe.find({}).populate('createdBy','full_name email');
        if(recipes.length === 0){
            return res.status(404).json({error: "No recipes found"});
        }

        res.status(200).json(recipes);
        
    } catch (error) {
       console.log("Get All Reciped Error: ",error.message);
       res.status(500).json({error: "Internal Server Error"}) ;
    }
});


//Udpate a recipe:
recipeRouter.put('/edit/:recipeId',AuthMiddleware,async(req,res) => {
    const userId = req.userId;
    const {image,title,description,ingredients,instructions} = req.body;
    const recipeId = req.params.recipeId;

    try {
        const recipe = await Recipe.findById(recipeId);

        if(!recipe || recipe.createdBy.toString() !== userId){
            return res.status(403).json({error: "You are not authorized to update this recipe"});
        }

        if(!recipe){
            return res.status(404).json({Error: "Recipe not found"});
        }

        recipe.image = image;
        recipe.title = title;
        recipe.description = description;
        recipe.ingredients = ingredients;
        recipe.instructions = instructions;

        await recipe.save();

        return res.status(200).json({message: "Recipe udpated successfuly"});
        
    } catch (error) {
        console.log("Update Recipe Error: ",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
});

//Delete a recipe:
recipeRouter.delete('/delete/:recipeId',AuthMiddleware,async(req,res) => {
    const userId = req.userId;
    const recipeId = req.params.recipeId;
    try {
         const recipe = await Recipe.findById(recipeId);

            if(!recipe || recipe.createdBy.toString() !== userId){
                return res.status(403).json({error: "You are not authorized to delete this recipe"
            });
            }
        await Recipe.findByIdAndDelete(recipeId)
        return res.status(200).json({message: "Recipe deleted successfully"});

    } catch (error) {
        console.log("Delete Recipe Error: ",error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
});

export default recipeRouter;

