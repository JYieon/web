const express = require("express")
const router = require("./routes/test_router")

const app = express()
app.set("view engine", "ejs")
app.set("views", "./views")
app.use("/", router)

app.listen(3000, ()=>console.log("3000 서버 실행"))