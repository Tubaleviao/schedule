const express = require('express')
const router = require('./routes')
const app = express()
const port = 80

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/', router)

app.listen(port, () => console.log(`Port ${port}!`))