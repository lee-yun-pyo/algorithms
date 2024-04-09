// LCS (Longest Common Subsequence, 최장 공통 부분 수열)

const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

for (let i = 1; i < N; i++) {
  for (let j = 1; j < M; j++) {
    if (str1[i] === str2[j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // 📌
    }
  }
}

// 📌 dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) 의미
// 현재의 문자를 비교하는 과정 '이전의' 최대 공통 부분수열은 계속해서 유지된다. 
// 현재의 문자 이전의 결과는 LCS[i - 1][j]와 LCS[i][j - 1]가 된다.
// 즉, 현재 비교하는 문자가 다르면 현재 비교 문자 이전의 결과값이 곧 현재 비교 문자의 값이 된다. 
