const express = require('express')
​
const app = express()
​
// app.get('/name', (req, res) => {
//   console.log(req.query.n)
//   res.send(`Hello ${req.query.n}!`)
// })
​
// app.get('/name/:n/:x/:y', (req, res) => {
//   console.log(req.params)
//   res.send(`Hello ${req.params.n}!`)
// })
​
app.get('/calc/:op/:a/:b', (req, res) => {
​
  let a = parseInt(req.params.a)
  let b = parseInt(req.params.b)
​
  switch (req.params.op) {
    case 'add':
      res.send(`${a + b}`)
      break
    case 'subtract':
      res.send(`${a - b}`)
      break
    case 'multiply':
      res.send(`${a * b}`)
      break
    case 'divide':
      res.send(`${a / b}`)
      break
  }
})
​
app.listen(3000)
Collapse








