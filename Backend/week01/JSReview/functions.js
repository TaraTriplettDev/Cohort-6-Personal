const returnEmptyString = function () {

    return  ""

};

const returnZeroNumber = function () {

    return 0;

};

const returnEmptyArray = function () {

    return [];

};

const returnEmptyObject = function () {

    return {};

};

const returnString = function (string) {

    return string;

};

const addition = function (num1, num2) {

    return num1 + num2;

};

const subtraction = function (num1, num2) {

    return num1 - num2;

};

const multiplication = function (num1, num2) {

    return num1 * num2;

};

const division = function (num1, num2) {

    return num1 / num2;

};

const returnArray = function () {

    return [1, 2, 3];

};

const returnFirstIndex = function (array) {

    return array[0];

};

const returnSecondIndex = function (array) {

    return array[1];

};

const returnArrayLength = function (array) {
    return array.length;
};

const arraySum = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
};

const arraySubtraction = function (array) {
    let difference = 0;
    for (let i = 0; i < array.length; i++){
        difference -= array[i];
    }
    return difference;
};

const multiplicationArray = function (array) {
    let product = 1;
    for (let i = 0; i < array.length; i++){
        product *= array[i];
    }
    return product;
};

const divisionArray = function (array) {
    let remainder = 1;
    for (let i = 0; i < array.length; i++){
        remainder /= array[i];
    }
    return remainder.toFixed(3);
};

console.log(divisionArray([1, 2, 3]));

const oddArray = function (array) {
    const odds = array.filter((num) => num % 2 === 1);
    return odds;
};

const evenArray = function (array) {
    const evens = array.filter((num) => num % 2 !== 1);
    return evens;
};

module.exports = {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray
}
