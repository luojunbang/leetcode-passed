/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b)
    let r = arr[1]-arr[0]
    for(let i=1;i<arr.length-1;i++){
        if(arr[i+1]-arr[i]!==r) return false
    }
    return true
};