process.on('uncaughtException', (error) => { console.log("uncaughtException Error: ", error.message) })
const { dbConnection } = require('./database/dbConnection.js')
const { bootstrap } = require('./modules/index.routes.js')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

dbConnection()
bootstrap(app)

process.on('unhandledRejection', (error) => { console.log("unhandledRejection Error: ", error.message) })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))