function solution(s, n) {
    let answer = '';
    let cc = 0;
    for ( let i of s ) {
        if ( i === " ") {
            answer += " "
            continue
        }

        if ( i.charCodeAt() >= 65 && i.charCodeAt() <= 90 ) {
            if ( i.charCodeAt() + n > 90) {
                answer += String.fromCharCode(i.charCodeAt() + n - 26)    
            } else {
            answer += String.fromCharCode(i.charCodeAt() + n)
            }
        }
        if ( i.charCodeAt() >= 97 && i.charCodeAt() <= 122 ) {
            if ( i.charCodeAt() + n > 122) {
                answer += String.fromCharCode(i.charCodeAt() + n - 26)    
            } else {
                answer += String.fromCharCode(i.charCodeAt() + n)    
            }
            
        }
        
    }
    
    return answer;
}