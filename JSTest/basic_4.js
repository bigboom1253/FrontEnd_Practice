"use static"
// (1)숫자두개를인자값으로넣으면두숫자의합을리턴해주는함수를만들어주세요.

let sum = (a,b) => a+b;
console.log(sum(1,3));


//(2)“가위",“바위",“보"중하나를두개의인자값으로넣어누가승리했는데출력해주는함수를만들어주세요.

let game = (input_1, input_2) =>
{
    let result;
    switch (input_1){
        case "가위" :
            if(input_2 === input_1){
                result = "비겼습니다.";
            }
            else if(input_2 ==="바위"){
                result = "2플레이어가 승리했습니다!";
            }
            else if(input_2 ==="보"){
                result = "1플레이어가 승리했습니다!";
            }
            else{
                result = "입력이 잘못되었습니다.";
            }
            break;
        case "바위" :
            if(input_2 === input_1){
                result = "비겼습니다.";
            }
            else if(input_2 ==="보"){
                result = "2플레이어가 승리했습니다!";
            }
            else if(input_2 ==="가위"){
                result = "1플레이어가 승리했습니다!";
            }
            else{
                result = "입력이 잘못되었습니다.";
            }
            break;
        case "보" :
            if(input_2 === input_1){
                result = "비겼습니다.";
            }
            else if(input_2 ==="가위"){
                result = "2플레이어가 승리했습니다!";
            }
            else if(input_2 ==="바위"){
                result = "1플레이어가 승리했습니다!";
            }
            else{
                result = "입력이 잘못되었습니다.";
            }
            break;
        default :
            result = "입력이 잘못되었습니다.";   
    }
    console.log(`결과 : ${result}`)
}

game("가위","바위");
game("가위","보");
game("가위","가위");
