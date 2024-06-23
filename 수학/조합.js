function findCombinationsRecursive(arr, k) {
  const result = [];

  function generateCombinations(start, combination) {
    // 현재 조합의 길이가 k인 경우 결과에 추가
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    // 재귀적으로 다음 요소를 추가
    for (let i = start; i < arr.length; i++) {
      combination.push(arr[i]);
      generateCombinations(i + 1, combination);
      combination.pop(); // 다음 조합을 위해 현재 요소를 제거
    }
  }

  generateCombinations(0, []);
  return result;
}

// 사용 예제
const arr = [1, 2, 3, 4];
const k = 2;
const combinations = findCombinationsRecursive(arr, k);
console.log(combinations);
// 출력: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
