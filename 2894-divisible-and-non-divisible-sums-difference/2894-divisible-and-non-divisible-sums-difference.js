/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1=0;
    let num2=0;
    let  i = 1;
    while( i <= n){
        if(i % m === 0){
            num2 = num2+i;
        }
        else{
            num1 = num1+i
        }
        i++;
    }
    return num1-num2;
};