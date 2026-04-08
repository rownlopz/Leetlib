/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    for(let i=0;i<=nums.length-1;i++){
        nums[i]%2===0?nums[i]=0:nums[i]=1;
    }
    return nums.sort((a,b)=> a-b);
};