const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var results = utils.add(4, 5);

    expect(results)
        .toBeA('number')
        .toBe(9);
});

it('should async add two numbers', (done) => {

    utils.asyncAdd(3, 4, (sum) => {
        expect(sum)
            .toBeA('number')
            .toBe(7);
        done();
    });
});

it('should return the square of a number', () => {
    let res = utils.square(5);
    expect(res)
        .toBeA('number')
        .toBe(25);
});

it('should async return the square of a number', (done) => {
    utils.asyncSquare(9, (squared) => {
        expect(squared)
            .toBeA('number')
            .toBe(81);
        done();
    });
});

it('should verify first and last names are set', () => {
    var defaultObj = {
        age: 25,
        gender: "male"
    };
    var fullName = "John Smith";
    var modifiedObj = utils.setName(defaultObj, fullName);

    expect(modifiedObj)
        .toBeA('object')
        .toInclude({
            firstName: fullName.split(' ')[0],
            lastName: fullName.split(' ')[1]
        });
});
