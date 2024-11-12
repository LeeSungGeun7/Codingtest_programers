function solution(k, dungeons) {
    let maxCnt = 0
    
    let visited = Array(dungeons.length).fill(false)
    
    function dfs(k , cnt) {
        
        maxCnt = Math.max(maxCnt , cnt)
        
        
        for ( let i = 0 ; i < dungeons.length ; i++) {
            
            let [ required , cost ] = dungeons[i]    
            
            if ( !visited[i] && k >= required ) {
                visited[i] = true
                dfs(k - cost , cnt + 1 )
                visited[i] = false
            }
            
        }
    }
    
    dfs(k , 0) 
    return maxCnt
}