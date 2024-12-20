/**
 * Create the function mocker which will return defined data with 1 second delay.
 * It might be helpful in Front-end development when there is a need to make sure that your
 * interface works well with data that you get asynchronously. The use of the function is shown below:
 *
 * @param {object} response - The data to be returned after the delay
 * @param {number} delay - The delay in milliseconds (default is 1000 ms)
 * @return {Promise} - A promise that resolves with the response after the delay
 */
module.exports.mockApi = function mockApi(response, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (response === null || response === undefined) {
        reject(new Error('Invalid response'));
      } else {
        resolve(response);
      }
    }, delay);
  });
};
