var database = [
    {
        username: "andrei",
        password: "super"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coool!"
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if (database[0].username === user && database[0].password === pass)
    {
        console.log(newsFeed);
    }
    else
    {
        alert("Sorry, unknown username or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);