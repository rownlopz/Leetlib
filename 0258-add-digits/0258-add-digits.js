/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num>=10){
    let sum = 0;
    let n = num.toString().split('');
        for(let i of n){
            sum += Number(i);
        }
        num = sum;
    }
    return num;
};