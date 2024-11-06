/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str - The input string
 * @param {number} symbolsCount - The number of symbols to copy to the front and back
 * @returns {string} - The modified string
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  function copyAndPasteSymbols(str, num) {
    if (num > str.length) {
      return 'The number of symbols to copy exceeds the length of the string.';
    }
    let part = str.slice(0, num);
    return part + str + part;
  }
  
  let originalString = 'hello';
  let numSymbols = 2;
  alert(copyAndPasteSymbols(originalString, numSymbols));

}
