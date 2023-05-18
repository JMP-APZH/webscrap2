const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('All Scraps Overview working')
})

router.get('/scrapedairy', (req, res) => {
    res.send('All Dairy Scraps Overview')
})




module.exports = router