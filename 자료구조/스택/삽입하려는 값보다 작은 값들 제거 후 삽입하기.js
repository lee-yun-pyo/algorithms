/** 스택에서 값 삽입 시 삽입하려는 값보다 작은 값들 제거 후 삽입하는 코드 */

const stack = [8, 4, 9, 2, 4, 1, 3]; // 스택
const temp = 5; // 삽입하려는 값
let index = stack.length - 1; // top의 index 값

/* 기준 값(temp)보다 큰 값이 나올 때까지 작은 값들 제거 */
while (index >= 1 && stack[index--] < temp) {
  stack.pop();
}

console.log(stack); // [ 8, 4, 9 ]

stack.push(temp); // temp 삽입
console.log(stack); // [ 8, 4, 9, 5 ]
