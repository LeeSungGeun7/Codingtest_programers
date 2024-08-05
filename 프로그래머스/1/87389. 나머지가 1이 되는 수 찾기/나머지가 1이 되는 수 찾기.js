function solution(n) {
    // 자바스크립트로 코테보기 2일차
    let x = 0 ; 
    for ( let i = 1; i < n ; i++  ) {
        if ( n % i === 1) {
            return i
        }
    }
}