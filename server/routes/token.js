const express = require("express")

const router = express.Router()

const {createToken, stkpush} = require("../controller/token")

router.post("/", createToken, stkpush)

module.exports = router