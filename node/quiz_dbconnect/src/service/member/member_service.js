const dao = require("../../database/member/member_dao")

const loginCheck = async (body) => {
    let mem = await dao.getMember()

    for(let i=0; i<mem.length; i++){
        if(mem[i].ID === body.id){
            if(mem[i].PWD === body.pwd){
                return mem[i].NAME
            }else{
                return "notPwd"
            }
        }
    }
    return "notId"
}

const getMember = async () => {
    return await dao.getMember()
}

const addUser = async (body) => {
    let result = await dao.addUser(body)
    let msg = `<script>`
    if(result == 0){
        msg += `alert("회원가입 실패");
            location.href="/member/registerForm"</script>`
    }else {
        msg += `alert("회원가입 성공");
            location.href="/"</script>`
    }
    return msg
}

const getUser = async (mId) => {
    let user = await dao.getUser(mId)
    console.log("getUser : ", user)
    return user
}

const deleteUser = async (body) => {
    let result = await dao.deleteUser(body.id)
    let msg = "<script>"
    if(result == 0){
        msg += `alert("회원삭제 실패");
            location.href="/member/list"</script>`
    }else {
        msg += `alert("회원삭제 성공");
            location.href="/member/list"</script>`
    }
    return msg
}

const modifyUser = async (body) => {
    let result = await dao.modifyUser(body)
    let msg = "<script>"
    if(result == 0){
        msg += `alert("회원수정 실패");
            location.href="/member/modify_from?id=`+body.ID+`"</script>`
    }else {
        msg += `alert("회원수정 성공");
            location.href="/member/list"</script>`
    }
    return msg
}

module.exports = {loginCheck, getMember, addUser, getUser, deleteUser, modifyUser}