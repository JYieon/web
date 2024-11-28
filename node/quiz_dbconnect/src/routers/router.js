module.exports = (app) => {
    const bodyParser = require("body-parser")
    app.use(bodyParser.urlencoded())

    const memberRouter = require("./member/member_router")
    app.use("/member", memberRouter)

    const boardRouter = require("./board/board_router")
    app.use("/board", boardRouter)
 
    const router = require("express").Router();
    router.get("/", (req, res) => {
        res.render("index")
    })
    return router;
}