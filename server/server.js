import dotenv from 'dotenv'
import express from "express";
import cors from 'cors'
import mongoose, { mongo } from "mongoose";

dotenv.config();



const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => { console.log("Connected to DB") }).catch((err) => console.log(err))

app.get('/', (req, res) => {

    res.send('Packlist app is running,and holy shit its working')
})

app.get('/movies', async (req, res) => {


})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => { console.log(`server is running on ${PORT}`) })

