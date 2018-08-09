var database = [
    {
        username: "andrei",
        password: "super"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!",
        popup: function() {
            alert(this.username + ": " + this.timeline)
        }
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo coool!",
        popup: function() {
            alert(this.username + ": " + this.timeline)
        }
    }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if (database[0].username === user && database[0].password === pass)
    {
        console.log(newsFeed[0].popup());
        console.log(newsFeed[1].popup());
    }
    else
    {
        alert("Sorry, unknown username or password!");
    }
}

signIn(userNamePrompt, passwordPrompt);