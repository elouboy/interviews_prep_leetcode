/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var search = function(nums, target) {
    
    let l = 0, r = nums.length - 1;
    
    while (l < r){
        const m = Math.floor((l+r)/2);
        if(nums[m]>nums[r]) l = m + 1;
        else r = m;
    }
    const rt = l;
    l = 0, r = nums.length - 1;

    while (l <= r){
        const m = Math.floor((l+r)/2);
        const rm = (m + rt) % nums.length;
        if(nums[rm] == target) return rm;
            if(nums[rm] < target) l = m + 1;
            else r = m - 1;
    }
    
    return -1
};