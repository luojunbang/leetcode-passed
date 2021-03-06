/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let curr = A[0], rise = A[0] > A[A.length - 1]
    return A[0] == A[A.length - 1] ? !A.some(i => i != A[0]) : !A.some(i => {
        let res = rise ? i > curr : i < curr
        curr = i
        return res
    })
};

console.log(isMonotonic([6, 5, 7, 4]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([4, 4, 4, 4]));
// console.log(isMonotonic([1, 2, 2, 3]));
// console.log(isMonotonic([1, 3, 2, 4]));
// console.log(isMonotonic([1, 3, 2]));
// console.log(isMonotonic([1, 1, 1, 1]));