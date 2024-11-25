const ser = require("../../service/member/member_service")
const config = require("../../../config/cookie_session/cookie_session_config")

const login = (req, res) => {
    res.render("member/login")
}

const logout = (req, res) => {
    res.clearCookie("isLogin");
    res.redirect("/")
}

const registerForm = (req, res) => {
    res.render("member/register_form")
}

const register = async (req, res) => {
    let msg = await ser.addUser(req.body)
    res.send(msg)
}

const loginCheck = async (req, res) => {
    let check = await ser.loginCheck(req.body)
    console.log(check)
    let msg = `<script>`
    if(check == "notPwd"){
        msg += `alert("비밀번호가 틀렸습니다");`
    }else if(check == "notId"){
        msg += `alert("존재하지 않는 아이디입니다");`
    }else{
        // req.session.username = req.body.id
        // req.session.name = check
        msg += `alert("${check}님 환영합니다^^");`
        res.cookie("isLogin", true)
    }
    msg += `location.href="/"</script>`

    res.send(msg)
}

const listCheck = (req, res) => {
    let cookie = req.cookies.isLogin
    console.log("cookie : ", cookie)
    if(cookie == undefined){
        res.redirect("login")
    }else{
        res.redirect("list")
    }
}

const list = async (req, res) => {
    let cookie = req.cookies.isLogin
    if(cookie == undefined){
        res.send(`<script>alert("로그인 후 이용가능"); location.href="/member/login"</script>`)
    }else{
        let user = await ser.getMember()
        res.render("member/list", {user})
    }
}

const userView = async (req, res) => {
    let user = await ser.getUser(req.query)
    res.render("member/userView", {user})
}

const deleteM = async (req, res) => {
    let msg = await ser.deleteUser(req.query)
    res.send(msg)
}

const modifyForm = async (req, res) => {
    let user = await ser.getUser(req.query)
    console.log(user)
    res.render("member/modify_form", {user})
}

const modify = async (req, res) => {
    let msg = await ser.modifyUser(req.body)
    res.send(msg)
}

module.exports = {login, registerForm, loginCheck, listCheck, list, logout, register, userView, deleteM, modify, modifyForm}