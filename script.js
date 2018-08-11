// New way
const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet);
    return second;
}



let newFunc = first();
newFunc();
