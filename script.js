
// Learn about Promises in Javascript
// From https://youtu.be/s6SH72uAn3Q

let promiseToDoIt = new Promise(function(resolve, reject){

  //Doing it
  let isDone = false;

  if (isDone){
    resolve('complete');
  }
  else {
    reject('incomplete');
  }

});

// When the Promise is resolved, .then() method gets called
// The argument "fromResolve" will get the value 'Clean'
// that was set during call to resolve('Clean') in the if-else
// statements above.
// When the Promise is rejected, .catch() method gets called

promiseToDoIt.then(function(fromResolve){
  console.log('the job is ' + fromResolve);
})
.catch(function(fromReject){
  console.log('the job is ' + fromReject);
})
