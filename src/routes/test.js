const express = require("express")
const { version } = require("mongoose")
const router = express.Router()



router.get("/", function(request, response){
    response.status(200).send({
        titulo: "API learnWithUs",
        version: "1.0.0"
    })
})

module.exports = router