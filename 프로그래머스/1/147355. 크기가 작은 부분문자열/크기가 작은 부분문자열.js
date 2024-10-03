function solution(t, p) {
    let start = 0 
    let sum = 0
    
    for ( let i = 0 ; start <= t.length - p.length  ; i++ ) {
        
        if (parseInt(t.substring(start,start+p.length)) <= parseInt(p)) {
           sum += 1 
        }
        start += 1 
        
        
    }
    
    return sum
}