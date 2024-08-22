const userController = require("./user.controller.js")
const { Router } = require("express");

const userRouter = Router();

userRouter.get('/index', userController.index)
userRouter.get('/user/:id', userController.user)
userRouter.get('/login', userController.login)
userRouter.get('/logout', userController.logout)
userRouter.get('/register', userController.register)
userRouter.get('/messages', userController.messages)
userRouter.post('/handleLogin', userController.handleLogin)
userRouter.post('/handleRegister', userController.handleRegister)

module.exports = userRouter