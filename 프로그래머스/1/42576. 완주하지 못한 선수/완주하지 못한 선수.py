def solution(participant, completion):
    answer = ''
    
    P = {}
    for item in participant:
        if item in P:
            P[item] += 1
        else:
            P[item] = 1

    
    for i in completion:
        if i in P.keys():
            P[i] -= 1
            
    keyss = [key for key, value in P.items() if value != 0 ]    
        
              
    return keyss[0]

