const express = require("express")
const router = express.Router()

router.get("/scrapall", (req, res) => {
    console.log(req.query.name)
    res.send("Scrap All Overview")
  })

  module.exports = router