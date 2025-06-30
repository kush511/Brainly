import {Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";


export function auth(req:Request,res:Response,next:NextFunction){
    const token = req.headers["authorization"];
    const authToken = Array.isArray(token) ? token[0] : token;
    
    if (!authToken) {
        res.status(403).json({
            message: "You are not logged in"
        })
        return;
    }

    try {
        const response = jwt.verify(authToken, JWT_SECRET) as any;
        req.userId = response.id;
        next();
    } catch (error) {
        res.status(403).json({
            message: "Invalid token"
        })
        return;
    }
}
