const dao = require("../../database/board/board_reply_dao")

const register = async (body) => {
    const result = await dao.register(body)
    return result.rowsAffected
}
const common = require("../ser_common")
const data = async (num) => {
    let result = await dao.data(num)
    result = common.timeModify(result.rows)
    return result
}

module.exports = {register, data}