def solution(s):
    a = int(len(s)/2)
    
    
    if len(s) % 2 != 0:
        return s[a:a+1]
    elif len(s) % 2 == 0:
        return s[a-1:a+1]
    