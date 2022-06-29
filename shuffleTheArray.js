/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = nums.slice(0, n)
    let arr2 = nums.slice(n, nums.length)
    for (let i = 1; i <= arr2.length; i++) {
        arr1.splice(2 * i - 1, 0, arr2[i-1])
    }
    return arr1
};
