import { Router, Request, Response, NextFunction} from "express";

const statusRoute = Router();

statusRoute.get('/status',(req, res, next) => {
    
    res.sendStatus(200);

});

export default statusRoute;