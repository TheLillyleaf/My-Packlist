import express from "express"
import Template from "../models/Template.js"

const router = express.router()

router.post("/", async (req, res) => {

    try {
        const { name, items, userId, category } = req.body
        const newTemplate = new Template({ name, items, userId, category })

        await newTemplate.save()
        res.status(201).json(newTemplate)
    } catch (error) {
        res.status(500).json({ error })

    }
})

router.get("/:id", async (req, res) => {

    try {
        const templates = await Template.find({
            $or: [{ userId: "standard" }, { userId: req.params.id }]
        })

        res.status(200).json(templates)
    } catch (error) {
        res.status(500).json(error)

    }
})
