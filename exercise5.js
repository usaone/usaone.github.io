// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const arrayForEach = [];
array.forEach((obj) => {
  let username = obj.username + "!";
  arrayForEach.push(username);
})

console.log('forEach',arrayForEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map(obj => obj.username + "?");

console.log('map',mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter(obj => obj.team === "red" );

console.log('map',filterArray);

//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulator, obj) => {
  return accumulator + obj.score;
}, 0);

console.log('reduceArray', reduceArray);

// (1), what is the value of i? 0
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const mapArray1 = array.map(obj => {
  obj.items = obj.items.map(item => item + "!");
  return obj;
});

console.log(mapArray1);
