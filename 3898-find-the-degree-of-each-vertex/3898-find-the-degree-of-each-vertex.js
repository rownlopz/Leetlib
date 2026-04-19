/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let n = matrix.length;
    let res = [];
    
    for(let i = 0;i < n; i++){
        let count=0;
        for(let j = 0; j < n; j++){
            if(matrix[i][j]===1){
                count++;
            }
        }
        res.push(count);
    }
    return res;
};