function solution(cacheSize, cities) {
    let time = 0  
    
    let cach = []
    
// 캐시 히트: 필요한 데이터가 캐시에 존재할 때, 
// 데이터를 캐시에서 바로 가져옵니다. 이때 실행 시간이 더 짧습니다.
// 캐시 미스: 필요한 데이터가 캐시에 없을 때, 데이터를 캐시에 로드한 후 가져옵니다. 
// 이때 실행 시간이 더 깁니다.
    
    for ( let city of cities ) {
        if (cacheSize === 0) {
        // 캐시 사이즈가 0일 경우: 모든 요청이 캐시 미스가 되어야 함
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