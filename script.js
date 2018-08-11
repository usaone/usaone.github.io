// New way
const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet);
    return second;
}



let newFunc = first();
newFunc();


// Closures - a function ran. The function executed. It's never 
// going to execute again, BUT, it's going to remember that there
// are references to variables in the parent scope that the child 
// scope always has access to. The function second() has access
// to the const greet in function first() which is the parent.

//------------------------------------------------------------//
// Currying
// Take for example, the next line
const multiply = (a, b) => a * b;

// Now write it as:
const curriedMultiply = (a) => (b) => a * b;

// This simply means
curriedMultiply(3) = (b) => 3 * b;
// Which means
curriedMultiply(3)(4) = 12;
// We can declare const as follows
const multiplyBy9 = curriedMultiply(9);
// Which will let us do
multiplyBy9(10);
//>> will give us 90
multiplyBy9(9);
//>> will give us 81

//------------------------------------------------------------//
// Compose
// Take for example the following
const compose = (f, g) => (a) => f(g(a));

// Let start
const sum = (num) => num + 1;
// Then
compose(sum, sum)(5);
// This should return sum(sum(5)), which is sum(6), which is 7.

//------------------------------------------------------------//
// Avoiding Side Effects, Functional Purity
// A function should have no side effects and should always return a value.
// A side effect is something outside of the function scope getting modified.
// Also, to maintain functional purity, the function should be deterministic,
// which means, it should return the same value as the result at any time
// for a given input.
