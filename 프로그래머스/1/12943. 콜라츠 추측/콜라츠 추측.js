function solution(num) {
    let cnt = 0
    
    let ans = 0
    
    while (num > 1) {
        if (cnt === 500) {
            return -1
        }
        if (num === 1) {
            break
        }
        if (num % 2 == 0) {
            num = parseInt(num / 2)
            cnt += 1
        } 
        else if (num % 2 == 1){
            num = (num * 3) + 1
            cnt += 1
        }
    }
    
    return cnt;
}