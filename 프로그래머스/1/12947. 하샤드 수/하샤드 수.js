function solution(x) {    
    let num = x
    let str = x + ""
    let total = 0
    for ( let i of str ) {
        total += parseInt(i) 
    }
    
    return x % total === 0 ? true : false
}