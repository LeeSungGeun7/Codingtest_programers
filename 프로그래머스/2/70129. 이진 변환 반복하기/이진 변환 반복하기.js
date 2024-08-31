function delNum(s) {
    let cnt = 0
    let str = ''
    for (let i of s ) {
        if ( i == '0') {
            cnt += 1
        } else {
            str += i
        }
    }   
    return [cnt , str.length]
}

function solution(s) {
    let str = "" ;
    let cnt = 0 ; 
    let functionCall = 0 ; 
    
    while ( s !== '1') {
        functionCall += 1 
        let [a , b] = delNum(s)
        s = parseInt(b).toString(2)
        cnt += a
        
        }
    
    return [functionCall , cnt];
}