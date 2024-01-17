import express, {Request, Response, NextFunction} from "express";
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
import errorHandler from "./middlewares/error-handler.middleware";
import authenticationRoute from "./routes/authentication.route";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";
import errorHanddlerMiddleware from "./middlewares/error-handdles.middleware";
import db from "./database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/authentication', authenticationRoute);
app.use('/users', jwtAuthenticationMiddleware, usersRoute);

app.use(errorHanddlerMiddleware);

app.use(usersRoute);
app.use(statusRoute);

app.use(errorHandler);

const server = app.listen(3000, () => console.log('Server Running on Port 3000!'));

process.on('SIGTERM', () => {
    db.end(() => {
        console.log('database connection closed!')
    });
    server.close(() => {
        console.log('server on 3000 closed!');
    });
})