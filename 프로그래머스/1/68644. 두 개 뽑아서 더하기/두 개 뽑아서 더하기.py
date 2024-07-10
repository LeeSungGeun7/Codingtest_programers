def solution(numbers):
    ans = []
    numbers.sort()
    
    dict = {} 
    
    for i in range(0,len(numbers)):
        for j in range(i+1,len(numbers)):
            val = numbers[i] + numbers[j]
            if val in dict:
                val = 0
            else:    
                dict[val] = val
                ans.append(val)
                
    ans.sort()
    return ans