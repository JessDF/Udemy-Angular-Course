let count = 5;
//count = 'a'; //in javascript you can do this b/c you can change type of the variable
let a : number;
a = true;
a = 'a';
a = 1;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = ["hello", 2, true, 'a'];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
//above is a little verbose so can declare an enum:
enum Color {
    Red = 0, //automatically gets the value of 0 and each is incremented
    Green = 1, // best practice is to declare so in case new one is added
    Blue = 2
};
let backgroundColor = Color.Blue;