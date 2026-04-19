/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = nums.reduce((acc,cur) => acc + cur,0);
    let sum2 = nums.join('').split('').reduce((acc,cur) => acc + Number(cur),0);
    return Math.abs(sum1-sum2);
};