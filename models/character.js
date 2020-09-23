const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: { type: String, required: true },
    initiative: { type: Number, required: true },
    hp: { type: Number }
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;