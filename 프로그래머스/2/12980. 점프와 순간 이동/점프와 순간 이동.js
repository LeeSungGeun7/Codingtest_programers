function solution(n) {
    let used = 0
    
    while ( n > 0) {
        if (n % 2 === 0 ) {
            // n = Math.ceil(n / 2)
        n = n >> 1
        } else {
            used += n & 1
            n -= 1
        }
    }
    return used 
}