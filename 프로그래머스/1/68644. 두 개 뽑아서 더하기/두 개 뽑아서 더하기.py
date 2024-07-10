def solution(numbers):
    ans = set()
    
    for i in range(0,len(numbers)):
        for j in range(i+1,len(numbers)):
            val = numbers[i] + numbers[j]
            ans.add(val)
                
    
    return sorted(ans)