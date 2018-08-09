var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i]);
}

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos); //refer to CanIuse.com to see if this feature is available in all browsers or only specific browsers.

var counterWhile = 0;
while (counterWhile < 10) {
    console.log(counterWhile);
    counterWhile++;
}

var counterDo = 10;
do {
    console.log(counterDo);
    counterDo--;
} while (counterDo > 0);

