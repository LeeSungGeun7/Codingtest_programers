function solution(survey, choices) {
    const dicts = { 
     'R' : 0 , 
     'C' : 0 ,
     'T' : 0 , 
     'F' : 0 ,
     'J' : 0 , 
     'M' : 0 ,   
     'A' : 0 , 
     'N' : 0 ,   
    }
    let ans = ''
    
    survey.forEach((e,idx)=>{
        if ( choices[idx] > 4) {
          dicts[e.charAt(1)] += choices[idx] - 4
        } else if ( choices[idx] < 4) {
          dicts[e.charAt(0)] += (choices[idx] - 4) * -1
        } 
    })
    
    function diff(a,b) {
        let m = ''
        if (dicts[a] > dicts[b]) {
            m = a
        } else if ( dicts[b] > dicts[a]) {
            m = b 
        } else {
            if ( parseInt(a) > parseInt(b) ) {
                m = b
            } else {
                m = a
            }
        }
        return m 
    }
    ans += diff('R','T')
    ans += diff('C','F')
    ans += diff('J','M')
    ans += diff('A','N')
    
    return ans;
}