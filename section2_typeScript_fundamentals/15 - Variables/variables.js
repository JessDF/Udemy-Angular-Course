function logMessage(message) {
    console.log(message);
}
function varDoSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally Var: ' + i);
}
function letDoSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally Let: ' + i);
}
var message = 'Hello world';
logMessage(message);
varDoSomething();
letDoSomething();
