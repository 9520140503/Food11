import { Router } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {z} from "zod";
import dotenv from "dotenv";
import AuthMiddleware from "../middleware/AuthMiddleware.js";

dotenv.config();

const userRouter = Router();

const userSchema = z.object({
  full_name: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters long" })
    .max(50, { message: "Full name must not exceed 50 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must not exceed 100 characters" }),
});

userRouter.post('/signup',async(req,res) => {
    const {full_name,email,password}= req.body;
    const validation = userSchema.safeParse(req.body);

    if(!validation.success){
        return res.status(400).json({error: validation.error.errors[0].message});
    }

    try {
        const exisitingUser = await User.findOne({email});
        if(exisitingUser){
           return res.status(400).json({error:"User alredy exists"});
        }

        const hashedPasssword = await bcrypt.hash(password, 10);
        const user = await User.create({
            full_name,
            email,
            password: hashedPasssword,
        });

        console.log(user);

        res.status(201).json({message: "User created successfully"})
        
    } catch (error) {
        console.log("Signup Error: ",error.message);   
        res.status(500).json({error: "Internal Server Error"});
    }
});

userRouter.post('/login',async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"User doesn't exists"})
        }

        const match = await bcrypt.compare(password,user.password)

        if(!match){
            return res.status(400).json({error:"Invalid credentials"})
        }

        const token = jwt.sign(
            {id: user._id, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: '2h'}
        )

        if(token){
            return res.status(200).json({message:"Login Successful",token});
        }

    } catch (error) {
        console.log("Login Error: ",error.message);   
        res.status(500).json({error: "Internal Server Error"});
    }
})

userRouter.put('/edit', AuthMiddleware, async (req, res) => {
    const { full_name, email, password } = req.body;

    const validation = userSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({ error: validation.error.errors[0].message });
    }

    try {
        const ownerId = req.userId;

        // Hash the password if it is being updated
        let updatedData = { full_name, email };
        if (password) {
            updatedData.password = await bcrypt.hash(password, 10); // Adjust the salt rounds as needed
        }

        const user = await User.findByIdAndUpdate(ownerId, updatedData, { new: true });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ message: "User updated successfully", user });

    } catch (error) {
        console.log("Update Error: ", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


userRouter.post('/logout',async(req,res) => {
     return res.status(200).json({ message: 'Logged out successfully' });
})

export default userRouter;
