function solution(s) {
    let hash = {}
    let ans = []
    s.split('').forEach((v,idx)=>{
        
        if ( v in hash !== true ) {
            hash[v] = idx
            ans.push(-1)
        } else {
            
            if ( hash[v] !== idx ) {
                ans.push(idx - hash[v])
                hash[v] = idx
            } 
        }
    })
    return ans
    
}