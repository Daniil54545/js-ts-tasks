/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start - starting number of the range
 * @param {number|string} end - ending number of the range
 * @returns {number} - sum of numbers in the range
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
 
  if (isNaN(start) || isNaN(end) || start > end) {
    throw new Error('Invalid input');
  }
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
return sum;
};

console.log(module.exports.sumInRange(1, 5));
