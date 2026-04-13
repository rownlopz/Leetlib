/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let result = [];
    for(let i = 0; i<= s.length-1;i++){
        if(result.includes(s[i])){
            continue;
        }
        else{
            result.push(s[i]);
        }
    }
    return result.length;
};
