const express = require("express")
const ctrl = require("../../controller/cookie/cookie_ctrl")
const router = express.Router()

router.get("/", ctrl.index)
router.get("/popup", ctrl.popup)
router.get("/makeCookie", ctrl.makeCookie)
router.get("/cart", ctrl.cart)
router.get("/save/:goods", ctrl.save) // :뒤에 변수 이름은 아무거나 써도됨
router.get("/view_list", ctrl.viewList)

module.exports = router
