function solution(a, b, n) {
    //dd
    let cola = 0 ;
    
    while ( n >= a ) {
        const exchangeCount = Math.floor(n / a);
        const newCola = exchangeCount * b;
        cola += newCola;
        n = n % a + newCola;
    }
    
    return cola
        
}