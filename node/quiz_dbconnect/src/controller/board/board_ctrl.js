const ser = require("../../service/board/board_service")
const mSer = require("../../service/member/member_service")

async function list(req, res){
    let data = await ser.getList(req.query.start)
    // console.log(list)
    res.render("board/list", {list : data.list, page : data.page, start : data.start})
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

async function write(req, res){
    let msg = await ser.addList(req.body, req.file)
    res.send(msg)
}

async function index(req, res){
    await ser.hitUp(req.query)
    let index = await ser.viewIndex(req.query)
    res.render("board/index", {index, fileName : index.CHANGE_FILE_NAME})
}

function fileDownload(req, res){
    const path = `./upload_file/${req.query.img}`
    res.download(path)
}

async function del(req, res){
    await ser.del(req.query)
    res.redirect("/board/list")
}

async function modifyForm(req, res) {
    let index = await ser.viewIndex(req.query)
    res.render("board/modify_form", {index, fileName : index.CHANGE_FILE_NAME})
}

async function modify(req, res) {
    await ser.modifyIndex(req.body, req.query, req.file)
    console.log(req.body)
    console.log("-----------------------")
    console.log(req.query)
    console.log(req.file)
    res.redirect("/board/index?no="+req.query.no)
}

module.exports = {writeForm, list, write, index, fileDownload, del, modifyForm, modify}