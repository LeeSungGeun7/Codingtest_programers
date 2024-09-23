function solution(cards1, cards2, goal) {
    
    for ( let i = 0 ; goal.length ; i++) {
        if ( cards1[0] === goal[0]) {
                cards1.shift()
                goal.shift()
        } else { 
            if ( cards2[0] === goal[0]) {
                cards2.shift()
                goal.shift()
            } else {
                break
            }
        }
    }
    

    return goal.length === 0 ? "Yes" : "No"

}