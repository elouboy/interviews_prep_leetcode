/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let ans = 0;
    let i = 0, j = height.length - 1;
    let leftMax = 0, rightMax = 0;
    
    while (i <= j) {
        if (height[i] <= height[j]) {
            if (height[i] > leftMax) {
                leftMax = height[i];
            } else {
                ans += (leftMax - height[i]);
            }
            i++;
        } else {
            if (height[j] > rightMax) {
                rightMax = height[j];
            } else {
                ans += (rightMax - height[j]);
            }
            j--;
        }
    }
    
    return ans;
};