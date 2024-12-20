/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    let results = [];
    let a = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          a++;

          if (a === promisesArray.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
};
