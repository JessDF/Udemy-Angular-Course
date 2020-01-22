//can declare a function like this in JavaScript:
let jsFunc = function(message) {
    console.log(message);
}
//In typescript we can do:
let tsFunc = (message) => {
    console.log(message);
}
//If function is only one line we can:
let tsFunc2 = (message) => console.log(message);
//These are called Arrow Functions
//If have no parameters:
let tsFunc3 = () => console.log("No Parameters");