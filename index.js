process.on('uncaughtException', (error) => { console.log("uncaughtException Error: ", error.message) })
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => res.josn({ message: 'Hello World!' }))
app.get('*', (req, res) => res.josn({ message: ' Not Found' }))
process.on('unhandledRejection', (error) => { console.log("unhandledRejection Error: ", error.message) })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))