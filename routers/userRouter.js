import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

export const userRouter = express.Router();             //변수만 export

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);