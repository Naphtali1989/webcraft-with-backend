const express = require('express')
const { getSamples } = require('./sample.controller')

const router = express.Router()


router.get('/', getSamples)

module.exports = router