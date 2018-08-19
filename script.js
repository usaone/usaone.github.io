async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}

// fetchUsers();

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

// Promise.all(urls.map(url =>
//   fetch(url).then(resp => resp.json())
// ))
// .then(array => {
//   console.log('users(old)', array[0]);
//   console.log('posts(old)', array[1]);
//   console.log('albums(old)', array[2]);
// })
// .catch(err => console.log('ughhhh fix it!', err));

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())));
  
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  }
  catch(err) {
    console.log('Error Encountered');
    console.log(err);
    console.log('Error Encountered');
  }
};

getData();