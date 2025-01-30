import express from "express"
import Template from "../models/Template.js"

const router = express.Router()

router.post("/", async (req, res) => {

    try {
        const { name, description, items, userId, category } = req.body
        console.log(req.body)
        console.log("data", name, description, items, userId, category)
        const newTemplate = new Template({ name, description, items, userId, category })

        await newTemplate.save()
        res.status(201).json(newTemplate)
    } catch (error) {
        res.status(500).json({ error })

    }
})

router.get("/", async (req, res) => {

    try {
        const templates = await Template.find()

        res.status(200).json(templates)
    } catch (error) {
        res.status(500).json(error)

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

router.delete("/:id", async (req, res) => {

    try {
        await Template.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Template deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


export default router

