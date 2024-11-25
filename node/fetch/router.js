module.exports = (app) => {
    const ctrl = require("./controller")
    const router = require("express").Router()

    router.get("/index", ctrl.index)
    router.get("/members", ctrl.members)
    router.get("/members/:uId", ctrl.member)
    router.post("/members", ctrl.reg)
    router.put("/members", ctrl.modify)
    router.delete("/members/:id", ctrl.del)

    return router
}