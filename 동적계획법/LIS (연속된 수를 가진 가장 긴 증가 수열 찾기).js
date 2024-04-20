// 연속된 수를 가진 가장 긴 증가 수열 찾기
const array = [5, 2, 4, 1, 3];
const N = array.length;
const dp = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  const num = array[i - 1];
  dp[num] = dp[num - 1] + 1;
}

//연속된 수를 가진 가장 긴 증가 수열은 2, 3 이므로 answer = 2
console.log(Math.max(...dp));
