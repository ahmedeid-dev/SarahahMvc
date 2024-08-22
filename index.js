process.on('uncaughtException', (error) => { console.log("uncaughtException Error: ", error.message) })
const { dbConnection } = require('./database/dbConnection.js')
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const { bootstrap } = require('./modules/index.routes.js')
const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/sarahah',
    collection: 'mySessions'
})

app.use(session({
    store,
    resave: false,
    secret: 'keyboard cat',
    saveUninitialized: false,
}))

dbConnection()
bootstrap(app)

process.on('unhandledRejection', (error) => { console.log("unhandledRejection Error: ", error.message) })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))