function solution(a, b) {
    let sum = 0 
    for (let i = 0 ; i < a.length-1 ; i++) {
        sum += a[i] * b[i]
    }
    return sum + a[a.length-1]*b[b.length-1]
}