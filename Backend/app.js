import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.js";
import recipeRouter from "./routes/recipe.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin:"https://recipeheaven11.netlify.app"
}));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((error) => console.log(error.message));

app.get('/',(req,res) => {
    res.status(200).send("This is the backend")
});

app.use('/user',userRouter);
app.use('/recipe',recipeRouter)

app.listen(3000,() => (
    console.log("Server running at port 3000")
));