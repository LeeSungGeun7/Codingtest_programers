function solution(k, score) {
    let a = []
    let ans = []

    for ( let i = 0 ; i < score.length ; i++ ) {
        // 명예의 전장에 점수 추가 
        a.sort((a,b)=> {
        return a - b
        })
        if ( a.length >= k) {
            if (a[0] < score[i]) {
                a.shift()
                a.push(score[i])
            }
        }
        else {
            a.push(score[i])
        }
        a.sort((a,b)=> {
        return a - b
        })
        ans.push(a[0])
    }    
        
    return ans 
    
}