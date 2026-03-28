/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    let freq={};
    for(i = 0 ; i < nums.length ; i++){
        let num = nums[i];
        if(freq[num]){
            freq[num]++;
        }
        else{
            freq[num]=1;
        }
    }
      function primenum(n){
        if(n <= 1) return false;

        for(let i = 2 ; i <= n-1 ; i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
      }
      
      for(let key in freq){
        if(primenum(freq[key])){
            return true;
        }
      }
      return false;
};