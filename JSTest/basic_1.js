'use strict';

// 23~24p

// (1)이름과점수3개를입력받아아래와같이출력하세요

let name = prompt('이름을 입력하세요.', '홍길동');
let score_1 = prompt('첫 번째 점수 입력하세요.', 0);
let score_2 = prompt('두 번째 점수 입력하세요.', 0);
let score_3 = prompt('세 번째 점수 입력하세요.', 0);

console.log(`결과 : 저의 이름은 ${name}이고 총점은${score_1+score_2+score_3}입니다.`)

// (2)사용자로점수를3개입력받아모든점수가65점보다클경우합격아닐경우불합격을출력하세요.

let scores = []

for(let i =0; i<3; i++){
    scores[i] = prompt(`점수${i+1}을 입력하세요.`, 0);
    if(0 > scores[i] || 100 < scores[i]){
        console.log('잘못된 점수가 입력되었습니다.')
    break;
    }
}

let filtered =scores.filter((value) => value >= 65)

console.log(filtered.length>=3 ? '합격':'불합격');

// (3)문자열을입력하면반복문을활용하여거꾸로출력하세요

let input_string = prompt('문자열 입력', '안녕하세요');
let result_string ='';

for(let i= input_string.length-1; i > -1; i--){
    result_string += input_string.charAt(i)
}
console.log(result_string);

// (4)구구단을2단부터9단까지출력해주세요.
for(let i = 2; i <10; i++){
    console.log(`*****${i}단*****`)
    for(let j = 1; j < 10; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

//(5)1에서100까지의숫자를출력하는데3과5의공배수일경우3과5의공배수,3의배수일경우3의배수,5의배수일경우5의배수,셋다아닐경우숫자를출력해주세요

result_string ='';

for(let i =1; i<101; i++){
    if(i%(3*5)=== 0){
        result_string += '3과5의공배수 ';        
    }
    else if(i%3 === 0){
        result_string += '3의배수 ';
    }
    else if(i%5 === 0){
        result_string += '5의배수 ';
    }
    else{
        result_string += i+' '
    }
}
console.log(result_string);

// (6)아래배열a를만들고배열내숫자들의합,평균,최대값을출력해주세요.

let a = [1,5,6,8,3,4,1,8,9,13,5,6,9];
function array_sum(array){
    let sum = 0;
    for(let i =0; i<array.length; i++)
        sum += array[i];
    return sum;
}
function array_max(array){
    let max =0;
    for(let i =0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}

console.log(`합계: ${array_sum(a)} 평균 : ${array_sum(a)/a.length} 최대값 : ${array_max(a)}`)

//(7)아래와같이배열a,b를만들고빈배열c를만들어반복문을활용a,b각각의요소를더해c에아래와같이넣어주세요.

let a=[[10,20],[30,40],[50,60]];
let b=[[2,3],[4,5],[6,7]];

let c =[];

for(let i =0; i <a.length; i++){ //a와 b의 행렬 크기가 같다고 가정
    let temp_array = [];
    for(let j = 0; j < a[i].length; j++){
        temp_array[j] = a[i][j] + b[i][j];
    }
    c.push(temp_array);
}
console.log(c);