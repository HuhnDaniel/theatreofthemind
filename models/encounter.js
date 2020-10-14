const mongoose = require("mongoose");
const { Schema } = mongoose;

const encounterSchema = new Schema({
    title: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId },
    entities: [{
        name: { type: String, required: true },
        initiative: { type: Number },
        hp: { type: Number }
    }]
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;