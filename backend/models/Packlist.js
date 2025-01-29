import mongoose from "mongoose";

const PacklistSchema = new mongoose.Schema({

    name: { type: String, required: true },
    items: [{

        name: { type: String, required: true },
        category: { type: String },
        quantity: { type: Number, required: true },
        packed: { type: Boolean, default: false },
        weight: { type: Number }
    }],
    userId: { type: String, required: true }

}, { timestamps: true });

const Packlist = mongoose.model("Packlist", PacklistSchema)

export default Packlist