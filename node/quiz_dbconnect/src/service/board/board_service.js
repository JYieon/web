const dao = require("../../database/board/board_dao")

const getList = async () => {
    let list = await dao.getList()
    return list.rows
}


const addList = async (body) => {
    // let changeFile = DATE + body.file_name
    let result = dao.addList(body)
    return result
}

module.exports = {getList, addList}