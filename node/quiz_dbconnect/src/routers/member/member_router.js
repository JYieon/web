const router = require("express").Router()
const ctrl = require("../../controller/member/ctrl")

router.get("/login", ctrl.login)
router.get("/logout", ctrl.logout)
router.post("/loginCheck", ctrl.loginCheck)
router.get("/listCheck", ctrl.listCheck)
router.get("/list", ctrl.list)
router.get("/registerForm", ctrl.registerForm)
router.post("/register", ctrl.register)
router.get("/userView", ctrl.userView)
router.get("/delete", ctrl.deleteM)
router.post("/modify", ctrl.modify)
router.get("/modify_form", ctrl.modifyForm)

module.exports = router