const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Main Server here on port 5001')
    res.render('index', { text: "Text from render working great" })
})

app.get('/allscraps', (req, res) => {
    res.send('All Scraps Overview working')
})

app.get('/allscraps/scrapedairy', (req, res) => {
    res.send('All Dairy Scraps Overview')
})

const scrapRouter = require('./routes/scrapall')

app.use('/scrapingall', scrapRouter)

app.listen(5001)