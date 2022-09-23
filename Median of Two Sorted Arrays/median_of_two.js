/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArr = [],
      len = (nums1.length + nums2.length) / 2;
    
    let i = 0, j = 0;
    while (i + j <= len) {
      sortedArr.push(
        nums1[i] < nums2[j] || nums2[j] === undefined ? nums1[i++] : nums2[j++]
      );
    }
    
    return Number.isInteger(len) ? 
      (sortedArr.pop() + sortedArr.pop()) / 2 : sortedArr.pop(2);
  };