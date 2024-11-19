const cookieConfig = {
    httpOnly : true,
    maxAge : 10000, // 쿠키를 10초동안만 유지
    signed : true // 암호화
}

const sessionConfig = {
    //권장사항 설정들
    secret : "암호화 키", //넣고 싶음 값 넣으면 그 값을 토대로 암호화 진행
    resave : false, //session에 대한 값을 새롭게 만들지 않음
    saveUninitialized : true //내용이 변경되던 안되던 무조건 session 저장
}

module.exports = {cookieConfig, sessionConfig}