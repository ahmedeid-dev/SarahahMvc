const { Schema, Types, model } = require("mongoose");

const messageSchema = new Schema({
    message: String,
    user: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Message = model('Message', messageSchema)

module.exports = Message