import express from "express"
import Packlist from "../models/Packlist.js"


const router = express.Router()

router.post("/", async (req, res) => {

    try {

        const { name, items, userId } = req.body
        const newPacklist = new Packlist({ name, items, userId })
        await newPacklist.save()
        res.status(201).json(newPacklist)
        console.log('Packlist saved')

    } catch (error) {
        res.status(500).json({ error })



    }
})

router.get("/:userId", async (req, res) => {

    try {
        const packlists = await Packlist.find({ userId: req.params.userId })
        res.status(200).json(packlists)
        console.log('Packlist retrieved by ', req.params.userId)

    } catch (error) {
        res.status(500).json({ error })
    }
})

router.get("/single/:id", async (req, res) => {

    try {
        const packlist = await Packlist.findById(req.params.id)
        if (!packlist)
            return res.status(404).json({ error: "Packlist not found" })
        res.status(200).json(packlist)
        console.log('Found packlist', packlist, req.params.id)

    } catch (error) {
        res.status(500).json({ error })
        console.log('Error with someting')
    }
})

router.put("/:id", async (req, res) => {

    try {
        const updatedPacklist = await Packlist.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedPacklist)
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.delete("/:id", async (req, res) => {


    try {
        console.log(req.params.id)
        await Packlist.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Operation succesful' })
    } catch (error) {
        res.status(500).json({ error })
    }
})

export default router