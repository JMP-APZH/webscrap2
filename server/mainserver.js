const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Main Server here on port 5001')
    res.render('index', { text: "Text from render working great" })
})



const scrapRouter = require('./routes/scrapall')

app.use('/scrapall', scrapRouter)

app.listen(5001)