let list = [
    {id:"aaa1", pwd:"aaa", name:"db홍길동", addr:"산골짜기"},
    {id:"bbb2", pwd:"bbb", name:"db김개똥", addr:"개똥별"},
    {id:"ccc3", pwd:"ccc", name:"db고길똥", addr:"마포구"},
    {id:"aaa4", pwd:"aaa", name:"db홍길동", addr:"산골짜기"},
    {id:"bbb5", pwd:"bbb", name:"db김개똥", addr:"개똥별"},
    {id:"ccc6", pwd:"ccc", name:"db고길똥", addr:"마포구"},
    {id:"aaa7", pwd:"aaa", name:"db홍길동", addr:"산골짜기"},
    {id:"bbb8", pwd:"bbb", name:"db김개똥", addr:"개똥별"},
    {id:"ccc9", pwd:"ccc", name:"db고길똥", addr:"마포구"},
    {id:"aaa10", pwd:"aaa", name:"db홍길동", addr:"산골짜기"},
    {id:"bbb11", pwd:"bbb", name:"db김개똥", addr:"개똥별"},
    {id:"ccc12", pwd:"ccc", name:"db고길똥", addr:"마포구"},
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

const registerView = (req, res) => {
    res.render("register_view")
}

const idCheck = (req, res) => {
    console.log(req.query) // ?는 query
    const result = list.filter( mem => mem.id == req.query.id)
    //값이 존재하면 length는 1 없으면 0
    res.json(result.length)
}

let cnt = 0
const viewMember = (req, res) => {
    cnt = 0
    res.render("view_member")
}

const quizMembers = (req, res) => {
    let number = cnt
    cnt += 3
    let result = []
    for( ; number < cnt; number++){
        result = result.concat(list[number])
    }
    res.json(result)
}

module.exports = {index, members, reg, member, modify, del, registerView, idCheck, viewMember, quizMembers}