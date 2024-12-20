const chai = require('chai');
const spies = require('chai-spies');
const sinon = require('sinon');

const { debounce } = require('../src/debounce');

chai.use(spies);

const { expect, assert } = chai;

let callBackSpy;
const DELAY = 100;
const ATTEMPTS = ['a', 'b', 'c', 'd'];

describe('debounce', function () {
  let clock;
  beforeEach(function () {
    callBackSpy = chai.spy(() => {});
    clock = sinon.useFakeTimers();
  });

  afterEach(function () {
    clock.restore();
  });

  it('should expect return type is a function', function () {
    const debounced = debounce(callBackSpy, DELAY);
    assert.isFunction(debounced);
  });

  it('should invoke debounce once', function (done) {
    const debounced = debounce(callBackSpy, DELAY);

    debounced(ATTEMPTS[0]);
    clock.tick(DELAY);

    expect(callBackSpy).to.have.been.called.once;
    expect(callBackSpy).to.have.been.called.with(ATTEMPTS[0]);
    done();
  });

  it('should invoke debounce twice', function (done) {
    const debounced = debounce(callBackSpy, DELAY);

    debounced(ATTEMPTS[0]);
    clock.tick(DELAY / 2);
    debounced(ATTEMPTS[1]);
    clock.tick(DELAY / 2);
    debounced(ATTEMPTS[2]);
    clock.tick(DELAY);
    debounced(ATTEMPTS[3]);
    clock.tick(DELAY);

    expect(callBackSpy).to.have.been.called.exactly(2);
    expect(callBackSpy).to.have.been.called.with(ATTEMPTS[2]);
    expect(callBackSpy).to.have.been.called.with(ATTEMPTS[3]);
    done();
  });
});
