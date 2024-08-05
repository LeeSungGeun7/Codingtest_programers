function solution(absolutes, signs) {

    
    return absolutes.reduce((sum , cur , idx)=>{
       return signs[idx] ? sum + cur : sum - cur
    }, 0 )
    
    
    
}