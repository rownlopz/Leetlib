/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let dx = Math.abs(x-z);
    let dy = Math.abs(y-z);

    if(dx<dy) return 1;
    else if(dy<dx) return 2;
    else return 0;
};