const express = require("express")
const router = require("./src/routers/session/session_router")
const session = require("express-session")
const config = require("./src/config")
const bodyParser = require("body-parser")

const app = express()
app.use(session(config.sessionConfig))
app.use(bodyParser.urlencoded())

app.set("views", "./src/views/session")
app.set("view engine", "ejs")

app.use("/session", router)

app.listen(3000, () => {console.log("3000 서버 실행")})