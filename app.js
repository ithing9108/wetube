// const express =  require('express');
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";    
import { userRouter } from "./router";

const app = express();
const PORT = 4000;

function handleListening(){
    console.log(`listen on :port:${PORT}`);
}

const handleHome = (req, res) => res.send("hello from home");    

const handleProfile = (req, res) => res.send("you are on my profile");

const betweenHome = (req, res, next) => {       // middleware - file transfer , log, ip check
    console.log("i'm between");
    // res.send("not happening");               // middleware로 연결을 중단할 수 있다.
    next();
}
app.use(cookieParser());                        // use middleware - to every route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));                         // app.use(helmet())
                                                // route가 먼저  실행되면 적용되지 않는다.

app.get("/", betweenHome, handleHome);          // use middleware - to one
app.get("/profile", handleProfile);

app.use("/user", userRouter);                   // user/~~

export default app;                             // const app을 주겠다.