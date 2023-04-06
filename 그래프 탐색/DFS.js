function dfs(graph, start, visited) {
  // 현재 노드 방문 처리
  visited[start] = true;
  console.log(start);
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  graph[start].forEach((i) => {
    if (!visited[i]) return dfs(graph, i, visited);
  });
}

// 각 노드가 연결된 정보를 배열 형태로 표현 (2차원 배열)
const graph = [
  [],
  [2, 3, 8],
  ...
  [1, 7]
]

// 각 노드가 방문한 정보를 배열 형태로 표현 (1차원 배열)
const visited = [false, ... , false];

// 노드 1을 시작 노드로 설정하여 DFS 함수 호출
dfs(graph, 1, visited)
