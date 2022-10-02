/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
    let result = [-1, -1];
  
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === target && result[0] === -1) {
        result[0] = index;
      }
      if (nums[nums.length - (1 + index)] === target && result[1] === -1) {
        result[1] = nums.length - (1 + index);
      }
    }
    return result;
  };