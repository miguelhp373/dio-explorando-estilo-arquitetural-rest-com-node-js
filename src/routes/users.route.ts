import { Router, Request, Response, NextFunction, response } from "express";
import { STATUS_CODES } from "http";

const usersRoute = Router();

usersRoute.get('/users',(req : Request, res : Response, next : NextFunction)=>{
    const users = [{userName : "Miguel"}];

    res.status(200).send(users);
});


usersRoute.get('/users/:uuid', (req : Request<{uuid : String}>, res : Response, next : NextFunction)=>{
    
    const uuid = req.params.uuid;

    res.status(200).send({uuid});
});

usersRoute.post('/users',(req : Request, res : Response, next : NextFunction)=>{
     
    const newUser = req.body;
    
    res.status(201).send(newUser);

})


usersRoute.put('/users/:uuid', (req: Request<{uuid : String}>, res : Response, next : NextFunction)=>{

    const uuid = req.params.uuid;
    const modifiedUser = req.body

    res.status(200).send({modifiedUser});
});

usersRoute.delete('/users/:uuid', (req:Request<{uuid : String}>, res: Response, next : NextFunction)=>{
    const uuid = req.params.uuid;
    res.sendStatus(200);
});



export default usersRoute;