import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './Router/userRouter.js';
import grievanceRouter from './Router/grievenvceRouter.js';


const app = express()
dotenv.config()

app.use(cors({
    origin: process.env.CORS,
    credentials: true,
}));

app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT || 5000;
connectDB();

app.use('/api/auth', authRouter)
app.use('/api/grievance', grievanceRouter)

app.use('/', (_,res) =>{
    res.send("backend is working")
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})

