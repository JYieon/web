function init(){
    let x = prompt("수(짝/홀) 입력");
    let result = ( x % 2 == 0 )?"짝수":"홀수";
    document.write(`${x}는 ${result} 입니다<br>`);
    x = prompt("수(3의배수) 입력");
    result = ( x % 3 == 0 )?"3의 배수":"3의 배수 아님";
    document.write(`${x}는 ${result} 입니다<br>`);
    n1 = prompt("첫번째 수 입력");
    n2 = prompt("두번째 수 입력");
    result = ( n1 > n2 )?`${n1}이 ${n2}보다 크다`: `${n2}이 ${n1}보다 크다`;
    document.write( result );
}