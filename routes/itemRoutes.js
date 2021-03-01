const router = require('express').Router()
const { join } = require('path')
const fs = require('fs')

// GET all item
router.get('/items', (req, res) => {
    fs.readFile(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if(err) { console.log(err) }
        console.log(data)
    }
    res.json(items)
})

// POST one item
router.post('/items', (req, res) => {
    items.push(req.body)
    res.sendStatus(200)
})

// PUT one item
router.put('/items/:text', (req, res) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i].text === req.params.text) {
            items[i].isDone = req.body.isDone
        }
    }
    res.sendStatus(200)
})

// DELETE one item
router.delete('/items/:text', (req, res) => {
    items = items.filter(item => item.text !== req.params.text)
    res.sendStatus(200)

})

module.exports = router