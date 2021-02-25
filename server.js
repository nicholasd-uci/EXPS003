
// Server-Side Boiler Plate
const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.listen(3000)


const express = require('require')

// this will help your frontend view routing to render with 1 line of code
// need a public folder
// file inside of that needs to be index.html
const { join } = require('path')
const app = express()


// this is compatable with line const { join }
// this hooks up your front end!
app.use(express.static(join(__dirname, 'public')))

// middleware - steps in the middle of your frontend - backend (request spot)
// we use this to say that we accept JSON Data - this lets it send and receive Data (SAME EVERYTIME === BoilerPlate)
// C&P lines 3 - 27 everytime setting up a server side // 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// we moved this section to itemRoutes.js
app.use(require('./routes'))
// we just called this app.use from line 9 to link our text that we had here to now render here when its called upon! 
// we moved this section to itemRoutes.js




app.listen(3000)

// npm init -y
// npm i express
// npm i uuid
// const uuid = require('uuid.v1')
// id: uuid.v1()