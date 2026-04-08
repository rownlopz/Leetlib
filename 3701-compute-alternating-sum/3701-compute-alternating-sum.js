/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let total = 0;
    for(let i=0;i<=nums.length-1;i++){
        if(i%2 !== 0){
            total = total - nums[i]
        }
        else{
            total = total + nums[i];
        }
    }
    return total;
};