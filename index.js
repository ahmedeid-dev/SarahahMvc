process.on('uncaughtException', (error) => { console.log("uncaughtException Error: ", error.message) })
const { dbConnection } = require('./database/dbConnection.js')
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const { bootstrap } = require('./modules/index.routes.js')
const express = require('express')

const app = express()
const port = 3000

const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/sarahah',
    collection: 'mySessions'
})

app.use(session({
    store: store,
    resave: false,
    secret: 'keyboard cat',
    cookie: { secure: true },
    saveUninitialized: false,
}))

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

dbConnection()
bootstrap(app)

process.on('unhandledRejection', (error) => { console.log("unhandledRejection Error: ", error.message) })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))