// Advanced Arrays

// Let's take an array
const array = [1, 2, 10, 16];

// In the old way we would do
const double = [];
array.forEach((num) => {
    double.push(num * 2);
});

console.log('forEach', double);

// map, or filter, or reduce can be used to do it better

// Using map
const mapArray = array.map((num) => {
    return num * 2;
});

// the above can be written as
const mapArray1 = array.map(num => num * 2);

console.log('map', mapArray1);

// Using filter
const filterArray = array.filter(num => num > 5);
const filterArray1 = array.filter(num => num === 5);

console.log('filter', filterArray);
console.log('filter', filterArray1);

// Using reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator * num;
}, 1);

console.log('reduce', reduceArray); //returns 320 for the above