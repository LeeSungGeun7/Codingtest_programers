function solution(n) {
    let arr = parseInt(Array.from(n+"").sort((a,b)=>{ return  b - a }).join(''))
    return arr
}