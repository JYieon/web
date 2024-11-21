const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")
oracledb.autoCommit = true
oracledb.outFormat = oracledb.OBJECT

const getMember = async () => {
    let con = await oracledb.getConnection(dbConfig)
    let result = await con.execute("select * from members")
    con.close()
    return result.rows
}

const addUser = async (body) => {
    const sql = `insert into members values(:id, :pwd, :name, :addr)`
    let con = await oracledb.getConnection(dbConfig)
    let result = 0
    try{
        result = await con.execute(sql, body)
    }catch{

    }
    con.close()
    return result
}

const getUser = async (mId) => {
    let sql = `select * from members where id=:id`
    let con = await oracledb.getConnection(dbConfig)
    let result = 0
    try{
        result = await con.execute(sql, mId)
    }catch{

    }
    con.close()
    return result.rows[0]
}

const deleteUser = async (mId) => {
    console.log(mId)
    let sql = `delete from members where id='${mId}'`
    let con = await oracledb.getConnection(dbConfig)
    let result = 0
    try{
        result = await con.execute(sql, mId)
    }catch{

    }
    con.close()
    return result
}

const modifyUser = async (mId) => {
    const sql = `update members set `
}

module.exports = {getMember, addUser, getUser, deleteUser, modifyUser}