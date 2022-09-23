/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var solution;
    if(x<0) return -1*reverse(-x);
    solution = (x+"").split("").reverse().join("");
    return (solution>2**31 - 1)? 0 : solution;
};