function solution(food) {

    let l = '';
    let r = '';
    
    food.forEach((e,idx)=>{
        for ( let i = 0 ; i < (e - e % 2)/2 ; i++) {
            l += idx
        } 
    })
    
    return l + "0" + l.split('').reverse().join('');;
    
    
}