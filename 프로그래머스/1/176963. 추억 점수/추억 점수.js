function solution(name, yearning, photo) {
    var answer = [];
    
    let dicts = Object.assign({}, ...name.map((k, i) => ({[k]: yearning[i]})));
    
    let sum = 0
    
    photo.forEach((e)=>{
        e.forEach((a)=>{
            if (a in dicts) {
            sum += dicts[a]
            }
        })  
        answer.push(sum)
        sum = 0
    })
    return answer;
}