const lookupChar = require('./03. Char Lookup');

const {
    assert
} = require('chai');

describe('Testing lookupChar function', () => {

    it('Sould return undefined if first parameter is a intiger number', () => {
        assert.equal(lookupChar(10, 10), undefined);
    });

    it('Sould return undefined if first parameter is an array', () => {
        assert.equal(lookupChar([], 10), undefined);
    });

    it('Sould return undefined if first parameter is an undefined', () => {
        assert.equal(lookupChar(undefined, 10), undefined);
    });

    it('Sould return undefined if second parameter is not intiger number', () => {
        assert.equal(lookupChar('10', '10'), undefined);
    });

    it('Sould return undefined if second parameter is undefined', () => {
        assert.equal(lookupChar('10', undefined), undefined);
    });

    it('Sould return undefined if second parameter is a decimal number', () => {
        assert.equal(lookupChar('10', 10.5), undefined);
    });


    it('Should return incorrect index if the index is negative', () => {
        assert.equal(lookupChar('Hello', -10), 'Incorrect index');
    });

    it('Should return incorrect index if the index is bigger then string length', () => {
        assert.equal(lookupChar('Hello', 7), 'Incorrect index');
    });

    it('Should return the character in specified index', () => {
        assert.equal(lookupChar('Hello', 1), 'e');
    });
});