/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - the input number
 * @returns {number} - sum of all digits
 */
module.exports.digitsSum = function digitsSum(n) {
  return Math.abs(n)               
      .toString()                  
      .split('')                   
      .map(Number)                 
      .reduce((a, b) => a + b, 0); 
};
