/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
      if (nums[i] === target) {
        return i;
      } else {
        if (nums[i] < target && target < nums[i + 1]) {
          return i + 1;
        } else if (target > nums[n - 1]) {
          return n;
        } else if (target < nums[0]) {
          return 0;
        }
      }
    }
  };