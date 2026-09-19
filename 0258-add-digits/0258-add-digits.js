/**
 * @param {number} num
 * @return {number}
 */
// var addDigits = function(num) {
//     while(num>=10){
//         num = String(num)
//         .split('')
//         .reduce((acc,cur) => acc + Number(cur),0);
//     }
//     return num;
// }

var addDigits = function(num) {
    while(num>=10) {
        num = String(num).split('').reduce((acc,cur) => acc + Number(cur),0);
    }
    return num;
}