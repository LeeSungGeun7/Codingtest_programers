function devide(first , str) {
    let x = first
    let xCount = 0
    let notXCount = 0
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === x) {
            xCount += 1;
        } else {
            notXCount += 1;
        }

        if (xCount === notXCount) {

            return i + 1;
        }
    }

    return -1;
}


function solution(s) {
    let x = s[0]
    let tmp = s
    let count = 0
    
    while ( tmp.length > 0.  ) {
       const x = tmp[0];
        const divideIndex = devide(x, tmp);

        if (divideIndex === -1) {
            count += 1;
            break;
        }


        tmp = tmp.slice(divideIndex);
        count += 1;
    }

    return count;
    
    
    
}