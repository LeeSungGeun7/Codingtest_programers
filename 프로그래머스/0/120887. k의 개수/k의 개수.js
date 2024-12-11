function solution(a, j, k) {
    let ans = 0;
    let str = ''
    for ( let i = a ; i <= j ; i++) {
        str += i + ""
    }
    str.split('').forEach((e)=>{
        if ( e === k + "") {
            ans += 1
        }
    })

    return ans
}