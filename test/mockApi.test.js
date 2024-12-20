const chai = require('chai');
const { mockApi } = require('../src/mockApi'); // Убедитесь, что путь указан правильно

const { expect, assert } = chai;

describe('mockApi', function () {
  it('should resolve promise after 500ms with expected result', function (done) {
    mockApi({ message: 'Hello, world!' }, 500).then(data => {
      assert.deepEqual(data, { message: 'Hello, world!' });
      done();
    });
  });

  it('should handle promise rejection after 500ms', function (done) {
    mockApi(null, 500).catch(error => {
      assert.instanceOf(error, Error);
      assert.strictEqual(error.message, 'Invalid response');
      done();
    });
  });
});
