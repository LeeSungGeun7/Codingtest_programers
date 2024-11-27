function solution(my_string) {
    let ans = ''
    let arr = {'a':1,'e':1,'i':1,'o':1,'u':1}
    
    for (let word of my_string) {
        if ( word in arr === false ) {
            ans += word
        }
    }
    
    return ans
}