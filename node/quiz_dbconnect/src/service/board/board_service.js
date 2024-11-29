const dao = require("../../database/board/board_dao")

const makeMsg = (msg, url) => {
    return `<script>alert("${msg}");location.href="${url}";</script>`
}

const getList = async () => {
    if(!start) start = 1
    start = Number(start)
    let list = await dao.getList()
    return list.rows
}


const addList = async (body, file) => {
    let result = await dao.addList(body, file)
    let msg = "", url = "/board/list"
    if(result == 0){
        msg = "등록 실패"
    }else{
        msg = "등록 성공"
    }
    return makeMsg(msg, url)
}

const viewIndex = async (body) => {
    let result = await dao.viewIndex(body.no)
    return result.rows[0]
}

const hitUp = async (body) => {
    await dao.hitUp(body.no)
}

const del = async (body) => {
    await dao.del(body.no)
}

const modifyIndex = async (body, num, file) => {
    await dao.modifyIndex(body, num.no, file)
}

module.exports = {getList, addList, viewIndex,hitUp, del, modifyIndex}