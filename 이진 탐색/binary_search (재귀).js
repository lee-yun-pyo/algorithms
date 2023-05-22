const n = 10; // 원소 개수
const target = 7; // 찾고자 하는 원소
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const result = binary_search(array, target, 0, n - 1);
if (result === null) console.log("원소가 존재하지 않습니다.");
else console.log(result + 1); // 4 출력

// 이진 탐색 소스코드 구현 (재귀함수)
function binary_search(array, target, start, end) {
  if (start > end) return null;
  const mid = Math.floor((start + end) / 2); // 중간 값
  // 찾은 경우 중간점 인덱스 반환
  if (array[mid] === target) return mid;
  // 중간점 값보다 찾고자하는 값이 작은 경우 왼쪽 확인
  else if (array[mid] > target)
    return binary_search(array, target, start, mid - 1);
  // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
  else return binary_search(array, target, mid + 1, end);
}
