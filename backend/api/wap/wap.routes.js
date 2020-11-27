const express = require('express')
const { requireAuth } = require('../../middleware/requireAuth.middleware')
const { getWaps, getWapById, deleteWap } = require('./wap.controller')
    // const { getWaps, getWapById, updateWap, addWap, deleteWap } = require('./wap.controller')

const router = express.Router()

router.get('/', getWaps)
router.get('/:id', getWapById)
router.delete('/:id', deleteWap)
    // router.put('/:id', updateWap)
    // router.post('/:id', addWap)

module.exports = router