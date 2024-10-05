function Cal(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
	    if (i * i == num) count++;
	    else if (num % i == 0) count += 2;
    }
    return count 
}


function solution(left, right) {
    let sum = 0
    for (let i = left ; i <= right ; i++) {
        if ( Cal(i) % 2 === 0) {
            sum += i
        } else {
            sum -= i
        }
    }
    return sum
}