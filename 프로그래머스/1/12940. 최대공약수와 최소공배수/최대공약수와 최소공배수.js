function gcd(a, b) {
  let r
  while (b != 0) {
    r = a % b
    a = b
    b = r
  }
  return a
}
function solution(n, m) {

    return [ gcd(m,n) , (n * m) / gcd(n, m)]
}