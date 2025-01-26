import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema({

    name: { type: String, required: true },
    items: [
        {
            name: { type: String, required: true },
            category: { type: String }
        }
    ],
    userId: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true })

const Template = mongoose.model("Template", TemplateSchema)

export default Template