var count = 5;
//count = 'a'; //in javascript you can do this b/c you can change type of the variable
var a;
a = true;
a = 'a';
a = 1;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = ["hello", 2, true, 'a'];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
//above is a little verbose so can declare an enum:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
