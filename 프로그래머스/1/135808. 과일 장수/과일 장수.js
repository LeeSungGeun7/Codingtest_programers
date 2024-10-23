function solution(k, m, score) {
    let ans = 0
    score.sort()
    
    
    
    while ( score.length >= m ) {
        let arr = []
        for ( let i = 0 ; i < m ; i++) {
            arr.push(score.pop())
        }

        ans += arr[arr.length-1] * m 
    }
    
    return ans
    
}