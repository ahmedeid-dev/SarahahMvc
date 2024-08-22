const { Schema, Types, model } = require("mongoose");

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        trim: true,
        capitalize: true,
        minlength: 3,
        maxlength: 10000,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const Message = model('Message', messageSchema)

module.exports = Message