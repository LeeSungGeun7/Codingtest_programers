function solution(arr) {
    sum = 0 
    arr.forEach((e)=>{
        sum += e
    })
    return sum / arr.length
}