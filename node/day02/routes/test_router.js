const express = require("express")
const ctrl = require("../controller/test_controller")
const router = express.Router()

router.get("/", ctrl.index)
router.get("/test", ctrl.test)
router.get("/info", ctrl.info)
router.get("/test1", ctrl.test1)
router.get("/test2", ctrl.test2)

module.exports = router