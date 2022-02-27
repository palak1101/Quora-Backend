import express from 'express';
import dotenv from 'dotenv';
import connectDB from './services/mongodb/connectDB.js';
dotenv.config()
import cors from 'cors';


const app = express()
const port = process.env.PORT || 3003


connectDB()


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Server up and running")
})


app.listen(port, (req, res) => {
    console.log(`Server listeninig at PORT ${port}`)
})