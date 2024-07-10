def solution(s):
    dict = {
        "one" : "1" ,
        "two" : "2" ,
        "three" : "3",
        "four" : "4",
        "five" : "5",
        "six" : "6",
        "seven" : "7",
        "eight" : "8",
        "nine" : "9",
        "zero" : "0"
    }
    answer = ""
    addStr = ""
    
    for char in s:
        if char >= '0' and char <= '9':
            answer += char
        else:    
            addStr += char
            if addStr in dict:
                answer += dict[addStr]
                addStr = ""
    
    
    return int(answer)