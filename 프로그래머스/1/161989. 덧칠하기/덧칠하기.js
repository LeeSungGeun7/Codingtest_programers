function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0;

    for (let wall of section) {
        if (wall > lastPainted) {
            count++;
            lastPainted = wall + m - 1;
        }
    }

    return count;
}