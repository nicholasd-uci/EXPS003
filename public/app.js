
axios.get('/api/items')
.then(( { data }) => {
    console.log(data)
})
.catch(err => console.error(err))

document.getElementById('addItem').addEventListener('click', event => {
    event.preventDefault()
    axios.post('/api/items', {
        text: document.getElementById('text').Value,
        isDone: false
    })
    .then(({ data }) => {
        console.log(data)
    })
    .catch(err => console.error(err))
})