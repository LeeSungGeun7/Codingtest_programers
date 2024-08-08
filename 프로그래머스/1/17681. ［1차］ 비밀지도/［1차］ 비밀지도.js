function solution(n, arr1, arr2) {
    var answer = [];
    let padding = '0'.repeat(n)
    let map = Array(n).fill().map(() => Array(n).fill());
    // 10진수에서 2진수로 변환 
    //return a.toString(2);
    
    function arrs (arr){
        arr.forEach((e,eIdx)=>{
            Array.from((padding + e.toString(2)).substr(-padding.length)).forEach((a,aIdx)=>{
                if (a === "1") {
                    map[eIdx][aIdx] = '#'   
                }
            })
        })
    }
    arrs(arr1)
    arrs(arr2)
    
    map.forEach((e)=>{
        let ans = ""
        e.forEach((a)=>{
            if ( a === '#') {
                ans += a    
            } else {
                ans += " "
            }
        })
        answer.push(ans)
    })
    
    return answer
    
    
}