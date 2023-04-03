// 최대 공약수 구하기
function GCD(p, q) {
  if (q === 0) return p;
  return GCD(q, p % q);
}
  
