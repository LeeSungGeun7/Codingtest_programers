function solution(s) {
    ans = []
    s.split(' ').forEach((v,idx)=>{
        let i = v.substring(0,1).toUpperCase()
        let c = v.substring(1,v.length).toLowerCase()
        ans.push(i + c) 
    })
    
    return ans.join(' ');
}