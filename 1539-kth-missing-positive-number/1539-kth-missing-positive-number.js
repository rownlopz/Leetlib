/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let mis = [];
    for(let i = 0; i <= 10000; i++){
        if(arr.includes(i)){
            continue;
        }
        else
        {
            mis.push(i);
        }
    }
    return mis[k];
};