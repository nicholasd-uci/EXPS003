// Express & Path
const express = require('require')
const { join } = require('path')

// App Function
const app = express()

//                   Middleware
// Connects the Front-End entirely 
app.use(express.static(join(__dirname, 'public')))
// Allows more in-depth json data
app.use(express.urlencoded({ extended: true }))
// Sends/receives json data
app.use(express.json())

// we moved this section to itemRoutes.js
app.use(require('./routes'))

// PORT
app.listen(3000)
