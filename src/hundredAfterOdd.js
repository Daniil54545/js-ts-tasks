/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  return arr.reduce((newArr, num) => {
    newArr.push(num);
    if (num % 2 !== 0) newArr.push(100);
    return newArr;
  }, []);
};
