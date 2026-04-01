/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0;
    for(let i = s.length-1; i >= 0 ; i--){
        if(s[i]===" " && count === 0){
            continue;
        }
        else if(s[i] !== " "){
            count++;
        }
        else{
            break;
        }
    }
    return count;
};