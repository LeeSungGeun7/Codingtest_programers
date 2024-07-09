def solution(arr, divisor):
    answer = []
    cnt = 0
    for i in arr:
        if i % divisor == 0:
            answer.append(i)
            cnt += 1 
    answer.sort()          
    if cnt == 0:
        return [-1]
    
    return answer