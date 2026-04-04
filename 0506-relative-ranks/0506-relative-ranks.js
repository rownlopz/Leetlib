/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sort = [...score].sort((a,b)=> b-a);
        let map = {};
        for(let i = 0 ; i < sort.length ; i++){
            if(i===0) map[sort[i]]="Gold Medal";
            else if(i===1) map[sort[i]] = "Silver Medal";
            else if(i===2) map[sort[i]] = "Bronze Medal";
            else map[sort[i]] = [i+1].toString();
        }
        return score.map(s => map[s]);
};
