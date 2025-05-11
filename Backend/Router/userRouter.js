import express from 'express'
import { loginUser, logoutUser, registerUser, getCitizen } from '../Controller/auth.controller.js';
import { requireAuth, requireRole } from '../middleware/auth.middleware.js';


const authRouter = express.Router();

authRouter.post("/signup", registerUser)
authRouter.post("/login", loginUser)
authRouter.post("/logout", logoutUser)

authRouter.get('/dashboard', requireAuth, requireRole('admin'));// this routes is used for open ai middleware


authRouter.get('/me', requireAuth, getCitizen);

export default authRouter
