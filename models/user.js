const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true }
});

userSchema.methods.validPW = (password) => {
    return bcrypt.compareSync(password, this.hash);
};

userSchema.methods.setPW = (password) => {
    this.salt = bcrypt.genSaltSync(10);
    this.hash = bcrypt.hashSync(password, salt);
};

const User = mongoose.model("User", userSchema);

module.exports = User;