// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const newDragons = dragons.filter(name => name.includes('John'));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (x) => x**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
// I got infinity
// The search on the internet resulted in the knowledge that the maximum
// value of a number in javascript is higher than 1.79769313486231e308 that
// I tried. So, using 10000 in the above formula exceeds the max but
// using 1209.335 falls within the limi.
console.log(power100(10000));
console.log(power100(1209.335));

