function solution(a, b) {

    let tmp = b
    if ( b > a === false ) { 
        b = a
        a = tmp
    }
    let sum = 0
    for ( let i = a ; i <= b ; i++) {
        sum += i
    }
    return sum 
    
    
}