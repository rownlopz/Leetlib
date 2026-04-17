/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxx = Math.max(...candies);
    let result = [];
    for(i=0;i<candies.length;i++){
        if(candies[i]+extraCandies >= maxx){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result;
};
