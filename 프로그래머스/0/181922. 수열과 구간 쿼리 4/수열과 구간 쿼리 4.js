function solution(arr, queries) {
    
    for ( let query of queries) {
        let start = query[0]; 
        let end = query[1]; 
        let k = query[2]
        
        for ( let i = start ; i <= end ; i++) {
            if ( i % k === 0 ) {
                arr[i] += 1
            } 
        }
    
    }
    return arr
}