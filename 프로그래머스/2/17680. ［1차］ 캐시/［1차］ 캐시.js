function solution(cacheSize, cities) {
    let time = 0  
    let cach = []
    
    for ( let city of cities ) {
        if (cacheSize === 0) {
             return cities.length * 5;
        }
        
        if ( cach.includes(city.toLowerCase())) {
            time += 1
            let arr = cach.filter((e)=> e !== city.toLowerCase())
            cach = arr
            cach.push(city.toLowerCase())
            continue
        }
        
        if ( cach.length === cacheSize ) {
            cach.shift()
            cach.push(city.toLowerCase())
            time += 5
        } else {
            cach.push(city.toLowerCase())    
            time += 5
        }
        
    }
    return time   
}