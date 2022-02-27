import express from 'express';
import dotenv from 'dotenv';
import connectDB from './services/mongodb/connectDB.js';
dotenv.config()
import cors from 'cors';
import questionRoutes from './routes/questionRoutes.js';
import answerRoutes from './routes/answerRoutes.js';
import authRoutes from './routes/authRoutes.js';



const app = express()
const port = process.env.PORT || 3003


connectDB()


app.use(cors())
app.use(express.json())



//routes
app.use("/api/v1/question", questionRoutes)//this takes care of our question routes
app.use("/api/v1/answer", answerRoutes)//this takes care of our answer routes
app.use("/api/v1/auth", authRoutes)//this takes care of our auth routes



app.get('/', (req, res) => {
    res.send("Server up and running")
})


app.listen(port, (req, res) => {
    console.log(`Server listeninig at PORT ${port}`)
})