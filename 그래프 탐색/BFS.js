function bfs(graph, start, visited) {
  // 큐에 현재 노드 삽입
  queue = [start];
  // 현재 노드 방문 처리
  visited[start] = 1;
  
  // 큐가 빌 때까지 반복
  while (queue.length !== 0) {
    // 큐에서 하나의 원소를 뽑아 출력
    v = queue.shift();
    console.log(v)
    // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    graph[v].forEach((i) => {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = 1;
      }
    });
  }
}
