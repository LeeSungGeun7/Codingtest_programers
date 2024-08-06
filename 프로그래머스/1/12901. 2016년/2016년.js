function solution(a, b) {
    
    let day = ["FRI","SAT","SUN","MON","TUE","WED","THU",]
    const oldDate = new Date('2016-01-01');
    const newDate = new Date(`2016-${a}-${b}`);
    let diff = Math.abs(newDate.getTime() - oldDate.getTime());
    diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
    let i = diff % 7
    
    if ( a == 1 && b == 1) {
        return "FRI"
    }
    return day[i];
}