/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  return function (low, high) {
    if (low < 0) low = 0;
    if (high > highestNumber) high = highestNumber;
    
    const primes = [];
    for (let i = low; i <= high; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  };
};
