const router = require("express").Router()
const ctrl = require("../../controller/board/board_reply_ctrl")

router.post("/", ctrl.register)
router.get("/:groupNum", ctrl.data)

module.exports = router