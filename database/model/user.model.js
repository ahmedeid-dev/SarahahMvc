const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        capitalize: true,
        trim: true,
        minlength: 2,
        maxlength: 200
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 1000,
        required: true
    }
})

const User = model('User', userSchema)

module.exports = User