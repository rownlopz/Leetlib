/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = 0,odd = 0;
    let result = num.split('');
    for(let i=0;i<result.length;i++){
        let digit = Number(result[i]);
        if(i%2==0) even+=digit;
        else odd+=digit;
    }
    return even===odd;
};
