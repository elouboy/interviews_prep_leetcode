/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    
    let copyToIndex = 1;
    let val = nums[0];
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val) {
            nums[copyToIndex] = nums[i];
            val = nums[i];

            copyToIndex++;
        }
    }
    
    return copyToIndex;
};