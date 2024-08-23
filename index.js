process.on('uncaughtException', (error) => { console.log("uncaughtException Error: ", error.message) })
const { dbConnection } = require('./database/dbConnection.js')
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const { bootstrap } = require('./modules/index.routes.js')
const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express); // Add this line to set the templating engine
app.set("views", path.join(__dirname, "./views")); // Assuming 'views' is in same level as root folder


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