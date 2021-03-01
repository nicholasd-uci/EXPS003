const express = require('require')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())


// GET all item
app.get('/items', (req, res) => {

})

// POST one item
app.post('/items', (req, res) => {

})

// PUT one item
app.put('/items/:id', (req, res) => {
    
})

// DELETE one item
app.delete('/items/:id', (req, res) => {

})

app.listen(3000)
