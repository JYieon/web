const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const ser = require("../../service/member/member_service")

async function list(req, res) {
    const result = await ser.getList()
    console.log("ctrl result : ", result)
    // res.send("list con 연결")
    res.render("member/member_index", {result})
}

function regForm(req, res){
    res.render("member/register_form")
}

async function register(req, res){
    console.log(req.body)
    let msg = await ser.register(req.body)
    console.log("msg : ", msg)
    res.send(msg)
}

async function memberView(req, res){
    console.log("param : ", req.params)
    let member = await ser.getMember(req.params)
    console.log("ctrl member : ", member)
    res.render("member/member_view", {member})
}

async function modifyForm(req, res) { // ?
    console.log(req.query)
    const member = await ser.getMember(req.query)
    console.log("ctrl modify : ", member)
    res.render("member/modify_form", {member})
}

async function deleteM(req, res) { // /
    console.log(req.params)
    let msg = await ser.deleteM(req.params)
    res.send(msg)
}

async function modify(req, res) {
    let msg = await ser.modify(req.body)
    res.send(msg)

}

module.exports = {list, regForm, register, memberView, modifyForm, deleteM, modify}