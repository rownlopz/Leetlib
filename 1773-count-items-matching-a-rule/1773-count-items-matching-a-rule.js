/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let idx = 0;

    if(ruleKey === "color"){
        idx=1;
    }else if(ruleKey === "name"){
        idx=2;
    }

    let count = 0;

    for(const item of items){
        if(item[idx] === ruleValue){
            count++;
        }
    }
    return count;
};