function solution(n) {
    let ans = 1
    for ( let i = 1 ; i < n ; i++ ) {       
        if ( (n / i) % 2 !== 0 && n % i < 1 ) {
            ans += 1 
        }
        else {
             continue
        }
    }
    
    return ans
    
}