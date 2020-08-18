// To Do List App //

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
// C&P lines 3 - 14 everytime setting up a server side // 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// syntax and what the routes look like. 
    // GET all items
// we would then use Postman to get the responses and no need for a front end! 
app.get('/items', (req, res) => {
    res.json(items)
})

    // POST one item
app.post('/items', (req, res) => {
    items.push(req.body)
    res.sendStatus(200)
})

    // PUT one item
app.put('/items/:text', (req, res) => {
    // console.log(req.params.text)
    // console.log(req.body)
    for (let i = 0; i < items.length; i++) {
        if (item[i].text === req.params.text){
            item[i].isDone = req.body.isDone
        }
    }
    res.sendStatus(200)
})

    // DELETE one item
app.delete('/items/:text', (req, res) => {
    items = items.filter(item => item.text != req.params.text)
    res.sendStatus(200)
})

app.listen(3000)

