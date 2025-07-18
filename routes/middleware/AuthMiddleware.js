import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const AuthMiddleware = (req,res,next) => {
    const token = req.headers.token;
    if(!token){
        return res.status(401).json({error: "Unauthorized access"});
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if(decode){
        req.userId= decode.id
        next();
    }else{
        return res.status(401).json({error: "Invalid token"});
    }
}

export default AuthMiddleware;