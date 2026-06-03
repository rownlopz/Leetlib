/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
  return result = n.toString().split('').reduce((acc,cur)=>acc+Number(cur),0);
};