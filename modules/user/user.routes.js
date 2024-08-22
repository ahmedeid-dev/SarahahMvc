const { Router } = require("express");
const { index, login, messages, register, user } = require("./user.controller.js")

const userRouter = Router();

userRouter.get('/', index)
userRouter.get('/login', login)
userRouter.get('/messages', messages)
userRouter.get('/register', register)
userRouter.get('/user', user)

module.exports = userRouter