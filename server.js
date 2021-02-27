// Express & Path
const express = require('require')
const { join } = require('path')

// App
const app = express()

// Connects the Front-End
app.use(express.static(join(__dirname, 'public')))

// Middleware - send/receive json data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// we moved this section to itemRoutes.js
app.use(require('./routes'))


// PORT
app.listen(3000)

// npm init -y
// npm i express
// nodemon
// npm i uuid
// const uuid = require('uuid.v1')
// id: uuid.v1()