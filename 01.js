/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const value = target - nums[i];
        if (map.has(value)) {
            return [map.get(value), i]
        }
        map.set(nums[i], i)
    }
};

const nums = [2, 7, 11, 15]
const target = 9
// Output: [0, 1]
console.log(twoSum(nums, target))

// Test case with duplicate numbers

const nums2 = [3, 2, 4, 7, 11, 15, 2, 7]
const target2 = 9

console.log(twoSum(nums2, target2)) // Output: [0, 2] or [1, 3] (any pair will do)
