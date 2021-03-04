const router = require('express').Router()
const {mxApiController} = require('./../controllers/mx.controller')

router.get('/mx', mxApiController)

module.exports = router