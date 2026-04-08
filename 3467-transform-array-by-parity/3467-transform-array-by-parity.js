/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    for(let i=0;i<=nums.length-1;i++){
        if(nums[i]%2===0){
            nums[i]=0;
        }else{
            nums[i]=1;
        }
    }
    nums.sort((a,b)=> a-b);
    return nums;
};