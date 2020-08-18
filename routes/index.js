// index is responsible for gather all files together and sending them all out as one
// need a router

const router = require('express').router()

router.use('/api', require('./itemRoutes.js'))
router.use('./', require('./viewRoutes'))


module.exports = router