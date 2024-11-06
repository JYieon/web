// 초기화하기 위한 함수. init이라는 이름을 주로 사용
function init(){
    let name = prompt("이름 입력")
    let age = prompt("나이 입력")
    // let msg = "이름 : " + name + "<br>나이 : " + age + "살"
    let msg = `이름 : ${name}<br>나이 : ${age}살`
    document.getElementById("div1").innerHTML = msg;

    console.log("age : " + typeof(age))
    // 형변환
    let num = Number(age)
    let num2 = parseInt(age)
    console.log(`num : ${typeof num}`)
    console.log(`num2 : ${typeof num2}`)

    console.log(`num+"" : ${typeof(num+"")}`)
    console.log(`num2.toString : ${typeof num2.toString()}`)

}