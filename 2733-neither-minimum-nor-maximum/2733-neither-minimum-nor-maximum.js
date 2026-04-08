/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    for(let i=0;i<=nums.length-1;i++){
        if(nums.length <= 2){
            return -1;
        }
        else if(nums[i] !== min && nums[i] !== max){
            return nums[i];
        }
    }
};