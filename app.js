const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'))

app.listen(port, () => console.log(`App listening on port ${port}!`))