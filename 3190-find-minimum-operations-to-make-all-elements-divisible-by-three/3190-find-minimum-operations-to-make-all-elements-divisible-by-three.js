/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    // let op = 0;
    // for(let i = 0; i<nums.length;i++){
    //     if(nums[i] === 1){
    //         op++;
    //     }
    //     else if([nums[i]+1]%3 === 0 || [nums[i]-1]%3 === 0){
    //         op++;
    //     }
    // }
    // return op;

    return nums.filter(num => num % 3 !== 0 ).length;
};



