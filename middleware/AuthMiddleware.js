import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const AuthMiddleware = (req, res, next) => {
    const tokenAuth = req.headers.authorization;

    if (!tokenAuth || !tokenAuth.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized access" });
    }

    const token = tokenAuth.split(" ")[1];

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.id;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
};

export default AuthMiddleware;
