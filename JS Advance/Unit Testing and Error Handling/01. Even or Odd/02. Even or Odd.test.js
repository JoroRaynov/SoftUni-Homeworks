let isOddOrEven = require('./02. Even or Odd');

let {
    assert
} = require('chai');

describe('Test isOddOrEven function', () => {

    it('Return even if the string length is even', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });

    it('Return odd if the string length is even', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });

    it('Return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('Return undefined if parameter is an array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('Return undefined if parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('Return undefined if parameter is an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
});