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

todos.forEach(logTodos);

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

