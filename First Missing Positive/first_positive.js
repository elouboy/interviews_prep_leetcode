/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function (nums) {
    if(nums.indexOf(1) === -1) return 1
    nums = nums.filter((item) => item > 0)
    nums = nums.sort((a, b) => a - b)
      for (let i = 0; i < nums.length; i++)
        if (nums[i + 1] - nums[i] > 1) 
            return nums[i] + 1
    return nums[nums.length - 1] + 1
  }