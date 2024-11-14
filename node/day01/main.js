const http = require("http") //http라는 기능을 가지고 온다 ( import http 같은 느낌)
const fs = require("fs")
const app = http.createServer((request, response)=>{
    console.log("test : ", request.url)
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}) //http 상태코드 200. 성공적으로 연결 시 해당 값 번역
    
    if(request.url === "/"){
        response.end("<h1>기본 페이지 입니다</h1>")
    }else if(request.url == "/member"){
        response.end(`<a href="/board">게시판</a>
                        회원 페이지 입니다`)
    }else if(request.url == "/board"){
        const data = fs.readFileSync("./test.html")
        response.end(data)
    }
    // response.end("응답하겠다") //3000번 포트에 출력
    
}) //서버 생성
app.listen(3000,() => {
    console.log("port start");
}) //생성한 서버 실행(포트번호)

//npm install supervisor --save(현재 프로그램에만 적용)
//npx supervisor main 명령어로 실행
//그럼 실시간 수정사항이 바로 적용된다

//npm i express -save 