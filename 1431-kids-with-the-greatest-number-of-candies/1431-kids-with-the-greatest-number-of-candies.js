/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxx = Math.max(...candies);
    let result = [];
    for(let n of candies){
        if(n+extraCandies >= maxx){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
};