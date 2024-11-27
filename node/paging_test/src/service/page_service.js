const dao = require("../database/pageDAO")

const pageRead = {
    list : async (start) => {
        if(!start) start = 1
        start = Number(start)
        const totalCnt = await dao.daoRead.totalCnt()
        // console.log("totalCnt : ", totalCnt)

        const num = totalCnt.rows[0]['COUNT(*)']
        const result = (num % 3 == 0)?0:1
        const page = parseInt(num/3 + result)

        const startNum = (start - 1) * 3
        const list = await dao.daoRead.list(startNum)
        return {list : list.rows, page, start}
    },
    content : async(num) => {
        const data = await dao.daoRead.content(num)
        return data.rows[0]
    }
}

const pageInsert = {
    write : async (body) => {
        const result = await dao.daoInsert.write(body)
    }
}

module.exports = {pageRead, pageInsert}