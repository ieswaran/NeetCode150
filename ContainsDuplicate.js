/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    nums.sort((a, b) => a - b);
    let left = 0, right = 1;
    while (right < nums.length) {
        if (nums[left] === nums[right]) {
            return true;
        }
        left++;
        right++;
    }
    return false;
}

console.log(containsDuplicate([1, 2, 3])); // true 