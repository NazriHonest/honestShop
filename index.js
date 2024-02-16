import express from 'express';
import ConnectToDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import dotenv from "dotenv";

dotenv.config()
const app = express()
ConnectToDB()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/api/users/', userRoutes)
app.use('/api/products/', productRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})