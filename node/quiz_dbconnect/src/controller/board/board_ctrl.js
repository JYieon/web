const ser = require("../../service/board/board_service")
const mSer = require("../../service/member/member_service")

async function list(req, res){
    let list = await ser.getList()
        console.log("ctrl : ", list)
        res.render("board/list", {list})
}

function writeForm(req, res){
    let cookie = req.cookies.isLogin
    let uid = req.cookies.id
    console.log(uid)
    if(cookie == undefined){
        res.redirect("../member/login")
    }else{
        res.render("board/write_form", {uid})
    }
}

function write(req, res){
    console.log(req.body)
    console.log("---")
    console.log(req.file)
    // ser.addList(req.body)
}

module.exports = {writeForm, list, write}