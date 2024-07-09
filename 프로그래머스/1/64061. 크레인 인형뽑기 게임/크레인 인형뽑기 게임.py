def solution(board, moves):
    answer = 0
    
    N = len(board)
    
    
    columns = [list(filter(lambda x: x > 0, reversed([board[i][j] for i in range(N)]))) for j in range(N)]
    
    
    stack = []
        
    for move in moves:
        
        if columns[move-1]:
            doll = columns[move-1].pop()  
            
            if stack and stack[-1] == doll:
                stack.pop()
                answer += 2
            else: 
                stack.append(doll)
        
        
    
    return answer