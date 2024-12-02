const con = require("../db_common")

const register = async (body) => {
    const sql = `insert into reply(id, title, content, write_group) values(:id, :title, :content, :write_no)`
    const result = await (await con).execute(sql, body)
    console.log(result)
    return result
}

const data = async (num) => {
    const sql = `select * from reply where write_group=${num}`
    const result = await(await con).execute(sql)
    return result
}

module.exports = {register, data}