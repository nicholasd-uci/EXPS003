
axios.get('/api/items')
.then(( { data }) => {
    console.log(data)
})
.catch(err => console.error(err))

document.getElementById('addItem').addEventListener('click', event => {
    event.preventDefault()

})