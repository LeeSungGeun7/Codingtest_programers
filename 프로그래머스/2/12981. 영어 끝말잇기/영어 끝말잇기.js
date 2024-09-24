function solution(n, words) {
    let dict = {};
    for (let i = 0; i < words.length; i++) {
        // 단어가 이미 나왔는지 확인
        if (words[i] in dict) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 끝말잇기 규칙에 맞는지 확인
        else if (i > 0 && words[i].charAt(0) !== words[i-1].charAt(words[i-1].length - 1)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        // 단어 저장
        dict[words[i]] = true;
    }
    return [0, 0];
}
