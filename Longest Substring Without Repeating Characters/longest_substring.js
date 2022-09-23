/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let p = 0;
    let res = 0;
    for(let i = 0; i< s.length; i++){
        while (set.has(s[i])){
            set.delete(s[p]);
            p +=1;
        }
        set.add(s[i]);
        res = Math.max(res, i - p+1);
    }
    return res;
};