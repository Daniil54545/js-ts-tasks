/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let tempSequence = [];
  let maxSequence = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      tempSequence.push(arr[i]);
      continue;
    }

    if (tempSequence.length > maxSequence.length) {
      maxSequence = tempSequence;
    }

    tempSequence = [];
  }

  maxSequence.push(maxSequence[0]);
  return maxSequence;
};
