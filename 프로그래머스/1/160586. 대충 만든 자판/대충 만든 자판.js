function solution(keymap, targets) {
    let charMinPress = {}
    
    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const pressCount = i + 1;
            if (!charMinPress[char] || charMinPress[char] > pressCount) {
                charMinPress[char] = pressCount;
            }
        }
    }
    
    return targets.map((target)=>{
        total = 0 
        
        for (let char of target) {
            if (!charMinPress[char]) return -1;
            total += charMinPress[char]     
        }
        return total 
    })

    

}