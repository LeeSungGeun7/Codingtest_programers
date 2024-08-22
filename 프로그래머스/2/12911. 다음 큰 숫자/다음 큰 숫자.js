function solution(n) {
    // 주어진 n 보다 큰 수를 반복문을 시작 
    // 2진수 1의 개수를 확인하는 로직 같으면 해당숫자 리턴 반복문 종료 
    let answer = 0
    let cnt = n.toString(2).split('1').length
    for ( let i = n+1 ; i < 999999 ; i++) {
        if ( i.toString(2).split('1').length === cnt) {
            answer = i
            break
        }
    }
    
    return answer;
}