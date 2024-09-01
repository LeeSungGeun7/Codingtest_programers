function solution(k, tangerine) {
    let hash = new Map()
    // let hash = { }
    let ans = 0

    for ( let i of tangerine) {
        if ( hash.has(i) ) {
            let count = hash.get(i);
            hash.set(i, count + 1);
        } else {
            hash.set(i , 1) 
        }
        
    }
    
    let arr = [...hash.entries()].sort((a,b)=>{
        return b[1] - a[1]
    })
    
    for (let i of arr) {
        k -= i[1] 
        ans += 1
        if (k <= 0) {
            break
        } 
    }
    return ans

}