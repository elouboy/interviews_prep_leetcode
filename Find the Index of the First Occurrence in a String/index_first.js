/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (haystack.length >= needle.length) {
      let j;
      for (let i = 0; i < haystack.length; i++) {
        for (j = 0; j < needle.length; j++) {
          if (needle[j] !== haystack[i + j]) break;
        }
        if (j === needle.length) return i;
      }
    }
    return -1;
  };