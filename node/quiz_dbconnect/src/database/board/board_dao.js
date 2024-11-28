const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")

oracledb.outFormat = oracledb.OBJECT
oracledb.autoCommit = true

const getList = async () => {
    const sql = `select * from board`
    const con = await oracledb.getConnection(dbConfig)
    const result = await con.execute(sql)
    console.log(result)
    return result
}

const addList = async (body, hit) => {
    // const sql = `insert board into values(board_seq.nextval(), '${body.title}', '${body.content}', sysdate, 0, '${body.file_name}', 'dhadakdj', '${body.id}')`
    console.log(body)
}

module.exports = {getList, addList}