let message; //Type is any
message = 'abc';
let endsWithC = message.endsWith('c'); //TypeScript gets confused so wouldn't know is a String since declared as any
//Type Assertions can be done like:
let typeAssertWay1 = (<string>message).endsWith('c');
let typeAssertWay2 = (message as string).endsWith('c');
//Type Assertion doesn't change the type of the variable 
//Only used to access the inteligence (i.e. smart finish, shows functions)
