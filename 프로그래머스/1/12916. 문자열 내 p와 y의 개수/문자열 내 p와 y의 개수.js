function solution(s){
    var answer = true;
    
    let a = 0 
    let b = 0 
    
    for ( let i of s ) {
        if ( i === 'p' || i === 'P') {
            a += 1 
        } 
        if ( i === 'y' || i === 'Y') {
            b += 1
        }
    }
    
    return a === b ? true : false;
}