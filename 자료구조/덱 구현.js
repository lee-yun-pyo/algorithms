class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.init();
  }

  // 덱 초기화
  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  // 앞에 데이터 삽입
  unshift(value) {
    const node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      const prevFront = this.front;

      prevFront.prev = node;
      this.front = node;
      node.next = prevFront;
    }
    this.count += 1;
  }

  // 앞 데이터 제거
  shift() {
    if (this.count === 0) return null;

    const value = this.front.value;
    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }
    return value;
  }

  // 뒤 데이터 삽입
  push(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const prevRear = this.rear;

      prevRear.next = node;
      this.rear = node;
      node.prev = prevRear;
    }
    this.count += 1;
  }

  // 뒤 데이터 제거
  pop() {
    if (this.count === 0) return;

    const value = this.rear.value;

    if (this.count === 1) {
      this.init();
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }
    return value;
  }

  // 특정 인덱스의 데이터 가져오기
  getValue(index) {
    if (index >= this.count) return;
    let node = this.front;

    for (let i = 0; i < index; i += 1) {
      node = node.next;
    }
    return node.value;
  }

  // 배열 형태로 반환
  getRawArray() {
    const arr = [];
    let node = this.front;

    for (let i = 0; i < this.count; i += 1) {
      arr.push(node.value);
      node = node.next;
    }
    return arr;
  }

  // 데이터 개수 구하기
  getLength() {
    return this.count;
  }
}
