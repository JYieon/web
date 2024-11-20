const express = require("express")
const app = express()
let con
app.get("/", (req, res) => {
    console.log("1. 연동 전")
    let result = connect()
    result.then(msg => {
        console.log("3연동 완료 후 특정 기능 사용")
        con = msg
        res.send("con : " + con)
    }) //순서대로 동작 완료
    
})
const connect = () => {
    let msg
    // setTimeout(test, 3000) //제일 마지막에 실행. 비동기방식. 동기방식과 비슷하게 돌아가도록 해야한다
    return new Promise( resolve => setTimeout(() => {
        msg = "연동 되었습니다"
        console.log("2연동하는 중...")
        resolve(msg) //함수 호출된 곳에 전달
    }, 1000))
    // return msg
}

app.get("/test", async (req, res) => { //비동기명령어 asyncm awaite
    console.log("1. 연동 전")
    con = await connect2() //답이 온 후 실행
    console.log("3연동 완료 후 특정 기능 사용")
    res.send("con : " + con)
})
const connect2 = () => {
    let msg
    return new Promise( resolve => setTimeout(() => {
        msg = "연동 되었습니다"
        console.log("2연동하는 중...")
        resolve(msg) //함수 호출된 곳에 전달
    }, 1000))
}

app.listen(3000, () => console.log("3000 연동"))