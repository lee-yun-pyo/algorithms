/* input (2차원 배열 - 세로 길이: 4, 가로 길이: 4)
4 1 3 4
1 2 8 7
8 1 2 5
1 5 3 4
 */

const R = 4; // 세로 길이
const C = 4; // 가로 길이
const map = Array.from(new Array(R + 1), () => new Array(C + 1).fill(0)); // (R+1)*(C+1) 2차원 배열 생성

// 0 배열에 (1,1) 부터 입력값 넣음
for (let i = 1; i <= R; i++) {
  map[i] = [0].concat(input.shift().split(" ").map(Number));
}

// 2차원 배열 누적합 구하기
for (let i = 1; i < R + 1; i++) {
  for (let j = 1; j < C + 1; j++) {
    map[i][j] += map[i][j - 1] + map[i - 1][j] - map[i - 1][j - 1];
  }
}

/* (x1, y1) 부터 (x2, y2) 까지의 누적합 구하기 */
const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
const sum =
  map[x2][y2] - map[x2][y1 - 1] - map[x1 - 1][y2] + map[x1 - 1][y1 - 1];
// 마지막에 map[x1 - 1][y1 - 1] 더하는 이유는 위 빼는 과정에서 겹치는 부분이기 때문
