'use strict';

//33~34p

// (1)숫자두개를인자값으로넣으면두숫자의합을리턴해주는함수를만들어주세요.

function sum(number_1, number_2){
    return number_1 + number_2;
}
let a = sum(1,3)
console.log(a);


// (2)“가위",“바위",“보"중하나를두개의인자값으로넣어누가승리했는데출력해주는함수를만들어주세요.
function game(input_1, input_2){
    //가위를 낼 경우
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

game("가위", "보")
// 결과 : 1플레이어가 승리했습니다!
game("보", "보")
// 결과 : 비겼습니다.
game("보","가위")
// 결과 : 2플레이어가 승리했습니다!

//(3)배열과찾고싶은값을입력하면해당값이있는모든위치를배열로리턴해주는함수를만들어주세요.

function findIndex(array, value){
    let temp_array = [];
    array.filter((element, index) => {
        if(element === value)
        {
            temp_array.push(index);
        }
    })
    return temp_array;
}

let a = findIndex([1,3,5,3,7,2,3,4],3);
console.log(a);

// (4)첫번째인자값으로는+,*를받고두번째인자값부터는숫자를무한정받아첫번째인자값이+이면숫자들의합,*이면숫자들의
// 곱을출력하는함수를만들어주세요.

function calc(operator, ...args){
    if(operator === "+"){
        let result = 0;
        for(let i of args){
            result += parseInt(i);
        }
        return result;
    }
    else if(operator === "*"){
        let result = 1;
        for(let i of args){
            result *= parseInt(i);
        }
        return result;
    }
    else{
        console.log('잘못된 연산자 입력.');
        return;
    }
}

let a = calc("+",1,3,4,3,5);
console.log(a);

let b = calc("*",4,2,3,4);
console.log(b);