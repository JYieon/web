let list = [
    {id:"aaa", pwd:"aaa", name:"db홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"db김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"db고길똥", addr:"마포구"}
]

const index = (req, res) => {
    res.render("index")
}

const members = (req, res) => {
    res.json(list)
}

const reg = (req, res) => {
    console.log(req.body)
    list = list.concat(req.body)
    res.json(1)
}

const member = (req, res) => {
    const result = list.filter(mem => mem.id === req.params.uId)
    res.json(result[0])
}

const modify = (req, res) => {
    list = list.filter( mem => mem.id != req.body.id)
    list = list.concat(req.body)
    res.json(1)
}

const del = (req, res) => {
    list = list.filter( mem => mem.id != req.params.id)
    res.json(1)
}

module.exports = {index, members, reg, member, modify, del}