/**
 * Determines if the provided string or number is a pangram.
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once.
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once.
 * @param {string | number} word - The input string or number.
 * @returns {boolean} - Returns true if it's a pangram, otherwise false.
 */
module.exports.pangram = function (word: string | number): boolean {
  const str = word.toString().toLowerCase();

  if (typeof word === 'string') {
    // Check for a letter pangram (contains all a-z)
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters.split('').every(letter => str.includes(letter));
  } else if (typeof word === 'number') {
    // Check for a digit pangram (contains all 0-9)
    const digits = '0123456789';
    return digits.split('').every(digit => str.includes(digit));
  }

  return false;
};
