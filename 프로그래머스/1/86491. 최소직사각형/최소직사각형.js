function solution(sizes) {

    
    let rotated = sizes.map(card => card.sort((a, b) => a - b));
    
    const maxW = Math.max(...rotated.map(([w, _]) => w));
    const maxH = Math.max(...rotated.map(([_, h]) => h));
    
    return maxW * maxH

    
}