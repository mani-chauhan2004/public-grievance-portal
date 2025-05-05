import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './Router/userRouter.js';

const app = express()
dotenv.config()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT;
connectDB();

app.use('/api/auth', authRouter)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})

