// Now again Promises from Andrei Neagoie's Udemy course

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('Error, it broke');
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'POOKIE');
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'Is it me you are looking for?');
});

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
  console.log(values);
});
