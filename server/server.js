/* eslint-disable no-undef */
import dotenv from 'dotenv'
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import pkg from 'express-openid-connect'
const { auth, requiresAuth } = pkg
import Packlist from '../models/Packlist.js';
import Template from '../models/Template.js';



dotenv.config();

const authConfig = {

    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTHSECRET,
    baseURL: 'http://localhost:3000',
    clientID: 'lHIcdpj3V4ZzrsJEJDYUlIP4fmtHaJLa',
    issuerBaseURL: 'https://dev-1mze30a08qamq8uz.eu.auth0.com'

}

const app = express()


app.use(cors())
app.use(express.json())
app.use(auth(authConfig))

mongoose.connect(process.env.MONGO_URI).then(() => { console.log("Connected to DB") }).catch((err) => console.log(err))

app.get('/', (req, res) => {

    res.send('Packlist app is running,and holy shit its working')
})

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user))

})
app.post("/test", async (req, res) => {

    try {

        const newPacklist = new Packlist({

            name: "Ski Trip",
            items: [{ name: "Ski jacket", category: "Clothing", quantity: 1 },
            { name: "Helmet", category: "Protection", quantity: 2 }
            ],
            userId: "auth0|123456789"
        })

        await newPacklist.save()
        res.json(newPacklist)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => { console.log(`server is running on ${PORT}`) })

