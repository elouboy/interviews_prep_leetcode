/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var old = x;
    var isNotDivisibleOnTen = x % 10;
    var mirror = 0;
    while (x > 0) {
        mirror = mirror * 10 + x % 10;
        x = Math.floor(x / 10);
        if (isNotDivisibleOnTen && x == mirror) {
            return true;
        }
    }
    return mirror === old;
};