function solution(lottos, win_nums) {

    const rank = [6, 6, 5, 4, 3, 2, 1];


    let correct = lottos.filter(e => win_nums.includes(e)).length;
    let zeros = lottos.filter(e => e === 0).length;


    let maxRank = rank[correct + zeros];
    let minRank = rank[correct];

    return [maxRank, minRank];
}
