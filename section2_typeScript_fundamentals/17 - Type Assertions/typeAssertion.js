var message; //Type is any
message = 'abc';
var endsWithC = message.endsWith('c'); //TypeScript gets confused so wouldn't know is a String since declared as any
//Type Assertions can be done like:
var typeAssertWay1 = message.endsWith('c');
var typeAssertWay2 = message.endsWith('c');
//Type Assertion doesn't change the type of the variable 
//Only used to access the inteligence (i.e. smart finish, shows functions)
