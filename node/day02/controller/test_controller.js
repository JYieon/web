const service = require("../service/test_service")

const index = (req, res) => {
    const list = service.index()
    // res.send("ctrl 연동")
    res.render("index", {mem : list})
}

const info = (req, res) => {
    const mem = service.info(req.param("id"))
    res.render("info", {mem})
}

const test = (req, res) => {
    res.send("ctrl test 연동")
}

const test1 = (req, res) => {
    res.render("test")
}

const test2 = (req, res) => {
    console.log("----- test2 컨트롤러 -----")
    console.log("req.param.id => ", req.param("id"))
    console.log("req.query => ", req.query)
    console.log("req.query => ", req.query.id)
    console.log("req.query => ", req.query["name"])
    // res.send("test2 연동")
    if(req.query.id == "aaa"){
        res.redirect("/")
    }else{
        res.redirect("/test1")
    }
    res.redirect("/") //이 경로를 다시 요청
}

module.exports = {index, test, info, test1, test2}
//exports는 하나의 값만 전달한다, {}로 묶어서 key:value 형식으로 만들어서 내보낸다