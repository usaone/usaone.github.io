// Temmplate strings

const name = "Sally";
const age = 34;
const pet = "horse";

// Usually to construct a string we do
// const greeting = "Hello " + name + " you seem to be " + (age-10) + "!";
// Now we can do using something called Template Strings having back-ticks` 
// const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`; 

// Default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}

console.log(greet(name));
