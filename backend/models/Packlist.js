import mongoose from "mongoose";

const PacklistSchema = new mongoose.Schema({

    name: { type: String, required: true },
    items: [

        {
            name: { type: String, required: true },
            category: { type: String },
            quantity: { type: Number, default: 1 }
        }],
    userId: { type: String, required: true }

}, { timestamps: true });

const Packlist = mongoose.model("Packlist", PacklistSchema)

export default Packlist