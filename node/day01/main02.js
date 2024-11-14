const express = require("express")
const app = express()

app.set("view engine", "ejs") //ejs로 화면 구현을 할 것이고
app.set("views", "./") //파일은 현재위치에서 찾으면 됩니당

app.get("/", (req, res) => {
    // res.send("기본 페이지")
    res.render("index")
})
app.get("/test", (req, res) => {
    res.send("test 페이지")
})
app.listen(3000, ()=>console.log("3000 server"))