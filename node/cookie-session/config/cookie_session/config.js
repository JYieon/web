const cookieConfig = {
    httpOnly : true,
    maxAge : 5000, // 쿠키를 5초동안만 유지
    signed : true // 암호화
}

module.exports = {cookieConfig}