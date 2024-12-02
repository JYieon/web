const ser = require("../../service/board/board_reply_service")

const register = async (req, res) => {
    console.log(req.body)
    const result = await ser.register(req.body)
    res.json(result)
}

const data = async (req, res) => {
    console.log("group : ", req.params.groupNum)
    const result = await ser.data(req.params.groupNum)
    res.json(result)
}

module.exports = {register, data}