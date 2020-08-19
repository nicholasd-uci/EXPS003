// this would be considered the HTML

const router = require('express').Router()
const { join } = require('path')


// this brings in the the "catch all route"  -> * <- this is the everything route 
router.get('./*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'))
})

module.exports = router
