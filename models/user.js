const mongoose = require('mongoose');
const { Schema } = mongoose;
// const { encounterSchema } = require('./encounter');

const entitySchema = new Schema({
    name: { type: String, required: true },
    initiativeMod: { type: Number, required: true },
    hp: { type: Number }
}, {
    strict: false,
    versionKey: false
});

const encounterSchema = new Schema({
    name: { type: String, required: true },
    entities: [entitySchema]
}, {
    strict: false,
    versionKey: false
});

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    encounters: [encounterSchema]
}, {
    strict: false,
    versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;