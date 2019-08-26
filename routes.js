const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('home'))
router.get('/test', (req, res) => res.render('test'))
router.get('*', (req, res) => res.send(404))

module.exports = router