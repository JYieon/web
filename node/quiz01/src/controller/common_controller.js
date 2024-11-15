const service = require("../service/member/member_service")

const common = (req, res) => {
    res.render("index")
}

module.exports = {common}