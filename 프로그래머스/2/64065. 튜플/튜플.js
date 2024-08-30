function solution(str) {
    let setArr = new Set()
    let ans = []

    
    str = str.slice(1, -1);
    

    const sets = str.split('},{');
    

    const result = sets.map(set => {

        return set.replace(/{|}/g, '').split(',').map(Number);
    });
    result.sort((a,b)=>{
        return  a.length - b.length 
    })
    
    for (let i of result) {
        
        for ( let s of i) {
            
            if (setArr.has(s) === false) {
                ans.push(s)    
                setArr.add(s)
            } else {
                
            }
            

        }
    }

    return ans;
}