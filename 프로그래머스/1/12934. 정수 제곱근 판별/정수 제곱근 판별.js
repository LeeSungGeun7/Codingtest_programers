function solution(n) {
    let a = Math.sqrt(n)
    return a % 1 === 0 ?  (a+1) * (a+1) : -1
}