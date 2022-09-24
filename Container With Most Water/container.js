/**
 * @param {number[]} height
 * @return {number}
 */
 const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while(left < right) {
        let width = right - left;
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};