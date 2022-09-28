/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let count = 0, sign = 1, maxValue = Math.pow(2,31);
    if(dividend < 0)  sign = sign*(-1);
    if(divisor < 0)  sign = sign*(-1);
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    count = getCount(dividend, divisor, count, maxValue, 1);
    return count*sign > 0 ? count > (maxValue-1) ? maxValue-1 : count*sign : count > maxValue ? maxValue : count*sign ;
};

function getCount(dividend, divisor, count, maxValue, step) {
    let initialValue = divisor;
    while(dividend >= divisor) {
        count += step;
        dividend -= divisor;
        step += step;
        divisor += divisor;
        if(count >= maxValue) break;
    }
    divisor = initialValue;
    while(dividend >= divisor) {
        count ++;
        dividend -= divisor;
        if(count >= maxValue) break;
    }
    return count;
}