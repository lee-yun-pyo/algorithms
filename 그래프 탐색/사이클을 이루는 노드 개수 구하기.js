// 백준 예제: 텀 프로젝트 9466
// https://www.acmicpc.net/problem/9466

// 문제 유형: 그래프 탐색, 깊이우선탐색
// 문제 핵심: 사이클을 이루는 그래프의 노드 개수 구하기

// 예제 입력
// 그래프 노드 개수 7
// 노드(배열 인덱스)별 가리키는 다음 노드 [3, 1, 3, 7, 3, 4, 6]
/* ------------------------------------------------------------------ */
// done 배열: 더 이상 노드를 방문하지 않을 것을 확신하는 경우 true
// 이미 방문했어도(visited[노드] === true) 사이클을 이룰 경우 다시 방문할 가능성이 있음
// 따라서 visited[노드] && !done[노드] 일 경우 사이클을 이룸

let answer = 0; // 사이클 그래프의 노드 개수
const N = 7;
const array = [0, ...[3, 1, 3, 7, 3, 4, 6]]; // 그래프 (편의상 0 추가)
const visited = Array.from({ length: N + 1 }, () => false);
const done = Array.from({ length: N + 1 }, () => false);

for (let i = 1; i <= N; i++) {
  if (!visited[i]) dfs(i);
}

function dfs(node) {
  visited[node] = true;
  const next = array[node];

  if (!visited[next]) dfs(next);
  // 방문은 했지만 방문이 완전 끝난 노드가 아닌경우 => 사이클
  else if (!done[next]) {
    for (let i = next; i !== node; i = array[i]) {
      answer += 1;
    }
    answer += 1; // 자기 자신 세기
  }

  done[node] = true; // 더 이상 해당 노드를 방문할 일이 없음
}

console.log(answer); // 예제 출력 4
