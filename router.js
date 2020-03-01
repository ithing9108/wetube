import express from "express";

export const userRouter = express.Router();


userRouter.get("/", (req,res) => res.send('user Index'));
userRouter.get("/edit", (req,res) => res.send('user edit'));
userRouter.get("/password/detail", (req,res) => res.send('user password'));

 