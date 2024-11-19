const express = require("express")
const router = express.Router()

const ctrl = require("../../controller/session/session_ctrl")

router.get("/", ctrl.index)
router.get("/get_session", ctrl.getSession)
router.get("/del_session", ctrl.delSession)
router.get("/login", ctrl.loginForm)
router.post("/login_check", ctrl.loginCheck)
router.get("/main", ctrl.main)
router.get("/logout", ctrl.logout)
router.get("/list", ctrl.list)
router.get("/cart", ctrl.cart)
router.get("/save/:goods", ctrl.save)

module.exports = router