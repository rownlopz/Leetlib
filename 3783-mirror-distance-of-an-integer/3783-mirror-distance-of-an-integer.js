/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let reversed = 0;
    let orginal = n;

    while(n !== 0){
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n/10);
    }
    return Math.abs(orginal - reversed);
};