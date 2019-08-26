const express = require('express')
const router = require('./routes')
const app = express()
const port = 80

app.use('/', router)
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('*', (req, res) => res.status(404))

app.listen(port, () => console.log(`App listening on port ${port}!`))