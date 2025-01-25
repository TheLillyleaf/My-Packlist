import express from "express"
import Packlist from "../models/Packlist"


const router = express.Router()

router.post("/", async (req, res) => {

    try {

        const { name, items, userId } = req.body
        const newPacklist = new Packlist({ name, items, userId })
        await newPacklist.save()
        res.status(201).json(newPacklist)

    } catch (error) {
        res.status(500).json({ error })



    }
})

router.get("/:userId", async (req, res) => {

    try {
        const packlists = await Packlist.find({ userId: req.params.userId })
        res.status(200).json(packlists)


    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get("/single/:id", async (req, res) => {

    try {
        const packlist = Packlist.findById(req.params.id)
        if (!packlist) return res.status(404).json({ error: "Packlist not found" })
        res.status(200).json(packlist)

    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put("/:id", async (req, res) => {

    try {
        const updatedPacklist = Packlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPacklist)
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.delete("/:id", async (req, res) => {

    try {
        await Packlist.findByIdAndDelete(req.params.id);
        res.status(204)
    } catch (error) {
        res.status(500).json({ error })
    }
})

export default router