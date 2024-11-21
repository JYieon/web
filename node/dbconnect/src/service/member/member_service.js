const dao = require("../../database/member/member_dao")
const bcrypt = require("bcrypt")

const getList = async () => {
    const pwd = "test"
    const changePwd = bcrypt.hashSync(pwd, 10) //값이 커질수록 암호화를 더 복잡하게 한다
    console.log("=========================")
    console.log("pwd : ", pwd)
    console.log("changePwd : ", changePwd)
    console.log("changePwd : ", bcrypt.compareSync(pwd, changePwd))

    const result = await dao.getList()
    console.log("ser result : ", result)
    return result.rows
}

const register = async (body) => {
    console.log("ser body : ", body)
    body.pwd = bcrypt.hashSync(body.pwd, 10)  //pwd를 암호화하여 저장
    console.log("ser body : ", body)

    const result = await dao.register(body)
    console.log("ser result : ", result)
    let msg = "", url=""
    if(result != 0){
        msg = "회원가입 성공"
        url = "/member/list"
    }else{
        msg = "문제 발생"
        url = "/member/register_form"
    }
    return getMessage(msg, url)
}

const getMessage = (msg, url) => {
    return `<script>alert("${msg}");location.href="${url}";</script>`
}

const getMember = (mId) => { //중간과정은 async, await 생략가능
    const result = dao.getMember(mId)
    console.log("ser result : ", result)
    return result
}

const deleteM = async (body) => {
    const result = await dao.deleteM(body.id)

    let msg = "", url=""
    if(result != 0){
        msg = "삭제되었습니다"
        url = "/member/list"
    }else{
        msg = "문제 발생"
        url = "/member/member_view/"+body.id
    }
    return getMessage(msg, url)
}

const modify = async (body) => {
    let result = await dao.modify(body)

    let msg = "", url=""
    if(result != 0){
        msg = "수정되었습니다"
        url = "/member/member_view/"+body.id
    }else{
        msg = "문제 발생"
        url = "/member/modify_form?id="+body.id
    }
    return getMessage(msg, url)
}

module.exports = {getList, register, getMember, deleteM, modify}