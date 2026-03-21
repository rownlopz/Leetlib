/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for(let i = 0; i < s.length - 1; i++){
        let current = s.charCodeAt(i);
        let next = s.charCodeAt(i+1);
        score += Math.abs(current-next); 
    }
    return score;
};