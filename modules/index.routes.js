const messageRouter = require("./messages/message.routes.js")
const { index, notFound } = require("./user/user.controller.js")
const userRouter = require("./user/user.routes.js")
module.exports.bootstrap = (app) => {
    app.get('/',index)

    app.use('/', userRouter)
    app.use('/message', messageRouter)

    app.get('*',notFound)

}
