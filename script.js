// Object properties - New way of declaring

const name = 'john snow';

const obj = {
    [name]: 'hello', //the property name comes from above declaration
    ['ray' + 'smith']: 'hihi' //dynamically declared property name
}

// Additionally, if we have three declarations as below
const a = "Simon";
const b = true;
const c = {};

// and we need to declare an object as follows
// with the property name same as the variable name
const obj1 = {
    a: a,
    b: b,
    c: c
}

// then we can declare the above in the following way
const obj2 = {
    a,
    b,
    c
}

console.log('Using explicit assignment', obj1);
console.log('New way', obj2);