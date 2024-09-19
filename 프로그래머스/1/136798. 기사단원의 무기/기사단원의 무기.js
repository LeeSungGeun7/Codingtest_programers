const CalMeasure = (n) => {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                count++;  // i는 약수
                if (i !== n / i) {
                    count++;  // n / i도 약수
                }
            }
        }
        return count;
    }

function solution(number, limit, power) {
    
    let sum = 0
    
    for ( let i = 1 ; i <= number ; i++ ) {
        let Calculated = CalMeasure(i)
        if ( Calculated > limit ) {
            sum += power
        } else {
            sum += Calculated
        } 
    }
                                           
    return sum
    
}