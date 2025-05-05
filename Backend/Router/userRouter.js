import express from 'express'
import { loginUser, logoutUser, registerUser } from '../Controller/auth.controller.js';


const authRouter = express.Router();

authRouter.post("/signup", registerUser)
authRouter.post("/login", loginUser)
authRouter.post("/logout", logoutUser)

export default authRouter
