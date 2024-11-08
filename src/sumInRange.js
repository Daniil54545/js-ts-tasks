/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start - starting number of the range
 * @param {number|string} end - ending number of the range
 * @returns {number} - sum of numbers in the range
 */
module.exports.sumInRange = function sumInRange(start, end) {
  {
    let sum = 0;
    let [first, last] = [Math.min(start, end), Math.max(start, end)];
    for (let i = first; i <= last; i++) {
      sum += i;
    }
    return sum;
  };
};
