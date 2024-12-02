const oracledb = require("oracledb")
const dbConfig = require("../../../config/database/db_config")

oracledb.outFormat = oracledb.OBJECT
oracledb.autoCommit = true

const getList = async (start) => {
    const sql = `select * from board order by write_no desc offset ${start} rows fetch next 3 rows only`
    const con = await oracledb.getConnection(dbConfig)
    const result = await con.execute(sql)
    return result
}

const addList = async (body, file) => {
    const sql = `insert into board values(board_seq.nextval, '${body.title}', '${body.content}', sysdate, 0, '${file.originalname}', '${file.filename}', '${body.name}')`
    let result = 0
    try{
        const con = await oracledb.getConnection(dbConfig)
        result = await con.execute(sql)
    }catch(err){
        console.log(err)
    }
    return result
}

const viewIndex = async (num) => {
    const sql = `select * from board where write_no=${num}`
    const con = await oracledb.getConnection(dbConfig)
    const result = await con.execute(sql)
    return result
}

const hitUp = async (num) => {
    const sql = `update board set hit=hit+1 where write_no=${num}`
    const con = await oracledb.getConnection(dbConfig)
    con.execute(sql)
}

const del = async (num) => {
    const sql = `delete from board where write_no=${num}`
    const con = await oracledb.getConnection(dbConfig)
    con.execute(sql)
}

const modifyIndex = async (body, num, file) => {
    let sql = ""
    if(!file){
        sql = `update board set title='${body.title}', content='${body.content}' where write_no=${num}`
    }else{
        sql = `update board set title='${body.title}', content='${body.content}', origin_file_name='${file.originalname}', change_file_name='${file.filename}' where write_no=${num}`
    }

    try{
        const con = await oracledb.getConnection(dbConfig)
        con.execute(sql)
    }catch(err){
        console.log(err)
    }
}

const totalCnt = async () => {
    let cnt
    try{
        const con = await oracledb.getConnection(dbConfig)
        cnt = await con.execute(`select count(*) from paging`)
    }catch(err){
        console.log(err)
    }
    return cnt
}

module.exports = {getList, addList, viewIndex, hitUp, del, modifyIndex, totalCnt}