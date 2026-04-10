/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let res = [];
    for(let i = 0 ; i<= mountain.length;i++){
        if(mountain.length<3){
            return [];
        }
        else if(mountain[i] > mountain[i+1] && mountain[i] > mountain[i-1]){
            res.push(i);
        }
    }
    return res;
};