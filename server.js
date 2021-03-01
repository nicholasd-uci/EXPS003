const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

let items = []

// GET all item
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
    for (let i = 0; i < items.length; i++) {
        if (items[i].text === req.params.text) {
            items[i].isDone = req.body.isDone
        }
    }
    res.sendStatus(200)
})

// DELETE one item
app.delete('/items/:text', (req, res) => {

})

app.listen(3000)
