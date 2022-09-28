/**
 * @param {string} s
 * @return {number}
 */
 function longestValidParentheses(s) {
    let maxLength = 0;
    let dp = new Array(s.length).fill(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') { 
            dp[i] = 2 + (dp[i - 2] || 0)
            maxLength = Math.max(maxLength, dp[i]);
        }
        if (
            s[i - 1] === ')' &&
            s[i] === ')' &&
            s[i - dp[i - 1] - 1] === '(' 
        ) {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
};