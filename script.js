// Demonstrating how Javascript works and how it handles long running tasks
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000);
console.log('3');

// Run the above in the Console and you will see
// 1
// 3
// afer a while...
// 2
