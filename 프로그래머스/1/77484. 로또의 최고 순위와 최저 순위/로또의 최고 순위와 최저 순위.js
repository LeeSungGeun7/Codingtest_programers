function Resolve(num) {
    if (num === 6) {
        return 1
    }
    if (num === 5) {
        return 2
    }
    if (num === 4) {
        return 3
    }
    if (num === 3) {
        return 4
    }
    if (num === 2) {
        return 5
    } 
    return 6
    
    
}


function solution(lottos, win_nums) {
    let correct = 0 
    let inCorrect = 0 
    
    lottos.forEach((e)=> {
        if ( win_nums.includes(e)) {
            correct += 1 
        } else {
            //inCorrect += 1
        }
        if ( e === 0) {
            correct += 1
            inCorrect += 1
        }
    })
    

    return [ Resolve(correct) , Resolve(correct - inCorrect)  ] 

    
    
}