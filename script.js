// Now again Promises from Andrei Neagoie's Udemy course

const urls = [
'http://jsonplaceholder.typicode.com/users',
'http://jsonplaceholder.typicode.com/posts',
'http://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
}))
.then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
})
.catch(() => console.log('Error!'));