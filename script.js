// Symbol - Creates uniqueness even with same values used in declaration

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

console.log('sym1',sym1);
console.log('sym2',sym2);
console.log('sym3',sym3);

console.log('compare: sym2 === sym3', sym2 === sym3)