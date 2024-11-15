const dao = require("../dao/test_dao")

const index = () => {
    const list = dao.getMember()
    return list
}

const info = ( id ) => {
    const list = dao.getMember()
    const mem = list.filter((v) => id === v.id) //list의 정보를 v에 넣고 id가 동일한 정보만 빼온다
    console.log("mem =>", mem)
    return mem
}

module.exports = { index, info }