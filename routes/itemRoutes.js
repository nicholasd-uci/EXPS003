// we are building the pieces seperate and connecting them later on

// 2nd part
const router = require('express').router()
const { join } = require('path')
const fs = require('fs')

let item = []

// syntax and what the routes look like. 
    // GET all items
// we would then use Postman to get the responses and no need for a front end! 
rounter.get('/items', (req, res) => {
    fs.readFile(join(__dir, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }
        res.json(data.toUpperCase(data))
    })
    // res.json(items)
})

    // POST one item
rounter.post('/items', (req, res) => {
    fs.readFile(join(__dir, '..', 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) { console.log(err) }

        let items = JSON.parse(data)
        item.push(req.body)
        
        res.sendStatus(200)
    })
    items.push(req.body)
    res.sendStatus(200)
})

    // PUT one item
rounter.put('/items/:text', (req, res) => {
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
rounter.delete('/items/:text', (req, res) => {
    items = items.filter(item => item.text != req.params.text)
    res.sendStatus(200)
})


module.exports = router