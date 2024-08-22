const messageRouter = require("./messages/message.routes.js")
const userRouter = require("./user/user.routes.js")

module.exports.bootstrap = (app) => {
    app.get('/', (req, res) => res.josn({ message: 'Hello World!' }))

    app.use('/user', userRouter)
    app.use('message', messageRouter)

    app.get('*', (req, res) => res.josn({ message: ' Not Found' }))

}
