const { sendMessage } = require("./message.controller.js");
const { Router } = require("express");

const messageRouter = Router();

messageRouter.post('/', sendMessage)

module.exports = messageRouter