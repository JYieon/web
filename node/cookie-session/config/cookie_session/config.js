const cookieConfig = {
    httpOnly : true,
    maxAge : 10000, // 쿠키를 10초동안만 유지
    signed : true // 암호화
}

module.exports = {cookieConfig}