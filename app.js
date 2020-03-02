// const express =  require('express');
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";    
import { userRouter } from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();
const PORT = 4000;

app.set('view engine', 'pug');
app.use(cookieParser());                        // use middleware - to every route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));                         // log
                                                // route가 먼저  실행되면 적용되지 않는다.

app.use(routes.home, globalRouter);                                                
app.use(routes.users, userRouter);              // user/me
app.use(routes.videos, videoRouter);
export default app;                             // const app을 주겠다.



/*
function handleHome(){
    console.log(`listen on :port:${PORT}`);
}
const betweenHome = (req, res, next) => {      // middleware - file transfer , log, ip check
    console.log("i'm between");
     res.send("not happening");                // middleware로 연결을 중단할 수 있다.
    next();
}
app.get("/", betweenHome, handleHome);         // use middleware - to one


const handleProfile = (req, res) => res.send("you are on my profile");
app.get("/profile", handleProfile); */
