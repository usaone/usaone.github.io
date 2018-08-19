
// Learn about Promises in Javascript
// From https://youtu.be/s6SH72uAn3Q

// Next level of understanding of promises
// to show dependency of one action on another

let cleanRoom = function() {
  return new Promise(function(resolve, reject){
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(p) {
  return new Promise(function(resolve, reject){
    resolve('Removed Garbage');
  });
};

let winIcecream = function(p) {
  return new Promise(function(resolve, reject){
    resolve('Won Icecream');
  });
};

// we will call cleanRoom() which will return 
// a Promise as defined above.
// the first .then() method will be called when 
// resolve executes in the cleanRoom promise and 
// returns the removeGarbage promise.
// the second .then() method runs on the successful
// execution of the removeGarbage promise resolve method
// and that returns the winIcecream promise.
cleanRoom().then(function(fromResolve) {
  console.log(fromResolve);
  return removeGarbage();
})
.then(function(fromResolve) {
  console.log(fromResolve);
  return winIcecream();
})
.then(function(fromResolve){
  console.log(fromResolve);
  console.log('Finished');
});