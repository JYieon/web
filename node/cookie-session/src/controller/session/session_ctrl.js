const ser = require("../../service/session/session_service")
const config = require("../../config")

const index = (req, res) => {
    req.session.name = "홍길동"
    req.session.age = 20
    res.render("set_session")
}

const getSession = (req, res) => {
    console.log(req.session.name)
    const sessionValue = {
        name : req.session.name,
        age : req.session.age
    }
    // res.send("getSession")
    res.render("get_session", sessionValue)
}

const delSession = (req, res) => {
    // delete req.session.name //하나의 세션 삭제
    req.session.destroy() //모든 세션 종료
    const msg = `<script>
        alert("세션 삭제")
        location.href="/session/get_session"
        </script>`
    res.send(msg)
}

const loginForm = (req, res) => {  
    res.render("login", {username : req.session.username})

}

const loginCheck = (req, res) => {
    console.log(req.query.id)
    console.log(req.query.pwd)
    console.log(req.body) //post방식에선 query사용x
    const dbId = "aaa", dbPwd = "111", dbName = "홍길동"
    let msg = ""
    const user = ser.getUser()
    user.forEach((data) => {
        if(req.body.id === data.id){
            if(req.body.pwd === data.pwd){
               req.session.username = data.id
               req.session.name = data.nick
               return res.redirect("/session/main") 
            }else{
                msg = `<script>alert("비번틀림");`
                msg += `location.href="/session/login"; </script>`
                res.send(msg)
            }
        }else{
            msg = `<script>alert("존재하지 않는 id");`
            msg += `location.href="/session/login"; </script>`
            res.send(msg)
        }
    })
    // if(req.body.id === dbId){
    //     if(req.body.pwd === dbPwd){aa
    //        req.session.username = dbId
    //        req.session.name = dbName
    //        return res.redirect("/session/main") 
    //     }else{
    //         msg += `alert("비번틀림");`
    //     }
    // }else{
    //     msg += `alert("존재하지 않는 id");`
    // }
    // msg += `location.href="/session/login"; </script>`
    // res.send(msg)
}

const main = (req, res) => {
    if(req.session.username == undefined){
        res.redirect("/session/login")
        const msg = `<script>
            alert("로그인 먼저 하세요");
            location.href="/session/login"
            </script>`
    }else{
        res.render("main", {nick : req.session.name})
    }
}

const logout = (req, res) => {
    req.session.destroy()
    res.redirect("/session/login")
}

const list = (req, res) => {
    res.render("list", {data : ser.getList()})
}

const save = (req, res) => {
    const goods_id = req.params.goods

    let cart_list = req.session.cart_list
    if(cart_list === undefined){
        cart_list = {} //초기화
    }
    cart_list = ser.save(cart_list, goods_id)
    req.session.cart_list = cart_list
    // const msg = "aaa : " + goods_id
    const msg = `<script>
        alert("${goods_id} 상품이 저장")
        location.href="/session/list"
    </script>`
    res.send(msg)
}


const cart = (req, res) => {
    let cart_list = req.session.cart_list
    if(cart_list === undefined){
        const msg = `<script>
            alert("저장된 품목이 없습니다")
            location.href="/session/list"
            </script>`
        res.send(msg)
    }else{
        res.render("cart", {list : cart_list, item : ser.getList()})
    }
}

module.exports = {index, getSession, delSession, loginForm, loginCheck, main, logout, list, cart, save}