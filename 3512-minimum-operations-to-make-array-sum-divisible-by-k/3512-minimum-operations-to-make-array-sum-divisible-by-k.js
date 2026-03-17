/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
     return nums.reduce((sum, num) => sum + num, 0) % k;
};