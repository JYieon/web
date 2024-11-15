//npm i : package.json에 명시된 기능이 설치된다(node_modules, package-lock.json) 
const express = require("express")
const m = require("./db/memberDAO")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

const router = express.Router()
app.use("/", router) //미들웨어 등록. /가 들어오면 라우터가 처리

router.get("/", (req, res)=>{
    console.log("router")
    res.render("index", {mem:m})
})

const router2 = express.Router()
app.use("/member", router2) //미들웨어 등록. /가 들어오면 라우터가 처리

router2.get("/list", (req, res)=>{
    res.send("요청 => " + req.url)
})

// app.get("/", (req, res)=>{
//     res.render("index")
// })

app.listen(3000, ()=>{console.log("3000 server")})