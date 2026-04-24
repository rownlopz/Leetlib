/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count = 0;
    for(let n of hours){
        if(n >= target){
            count++;
        }
    }
    return count;
};