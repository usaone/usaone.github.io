
// Learn about Promises in Javascript
// From https://youtu.be/s6SH72uAn3Q

// Next level of understanding of promises
// to show dependency of one action on another

let cleanRoom = function() {
  return new Promise(function(resolve, reject){
    resolve('cleaned the room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject){
    resolve(message + ' and removed the garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject){
    resolve(message + ' and was rewarded with ice cream.');
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
cleanRoom().then(function(result) {
  return removeGarbage(result);
})
.then(function(result) {
  return winIcecream(result);
})
.then(function(result){
  console.log('Done! I ' + result);
});