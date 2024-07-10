from datetime import datetime


def cal_time(start_time, end_time):
    time_format = "%H:%M"
    start = datetime.strptime(start_time, time_format)
    end = datetime.strptime(end_time, time_format)
    time_difference = end - start
    return time_difference.total_seconds() / 60  # 분 단위로 변환



def solution(fees, records):
    
    defaultT , defaultM , timeUp , moneyUp = fees
    
    dict = {}
    
    
    for car in records:
        time , carNum , status = car.split()
        
        if carNum not in dict:
            dict[carNum] = { "time": time , "status" : status , "total" : 0}
            
        else:
            if status == 'IN':
                dict[carNum]['time'] = time
                dict[carNum]['status'] = status
            else:
                in_time = dict[carNum]["time"]
                total_time = cal_time(in_time, time)
                dict[carNum]["total"] += total_time
                dict[carNum]["status"] = status
            
    for car_number, data in dict.items():
        if data["status"] == "IN":
            total_time = cal_time(data["time"], "23:59")
            dict[car_number]["total"] += total_time
            
        
    
        
    ans = []
    for car_number in sorted(dict.keys()):
        total_time = dict[car_number]["total"]
        if total_time <= defaultT:
            total_fee = defaultM
        else:
            total_fee = defaultM + ((total_time - defaultT) // timeUp) * moneyUp
            if (total_time - defaultT) % timeUp > 0:
                total_fee += moneyUp
        ans.append(int(total_fee))

    return ans


    
    