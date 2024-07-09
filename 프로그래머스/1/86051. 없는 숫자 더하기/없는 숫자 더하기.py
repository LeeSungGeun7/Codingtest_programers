def solution(numbers):
    num_set = set([1,2,3,4,5,6,7,8,9,0])

    for i in numbers:
        num_set.discard(i)
        
    
    return sum(num_set)