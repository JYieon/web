const express = require("express")
const ctrl = require("../controller/common_controller")
const router = express.Router()

router.get("/", ctrl.common)

module.exports = router