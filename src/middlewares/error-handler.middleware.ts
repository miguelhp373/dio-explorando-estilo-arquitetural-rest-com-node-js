import { Request, Response, NextFunction } from "express";
import { DatabaseError } from "../errors/database.error.model";

function errorHandler(error : any, req : Request, res : Response, next : NextFunction){
    
    if (error instanceof DatabaseError){
        res.status(400).send();
    } else {
        res.status(500).send();
    }
}

export default errorHandler;