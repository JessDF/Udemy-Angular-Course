//Class from previous lesson
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
        console.log("Within Draw Method - " + "x:" + this.x + " - y:" + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //...
    };
    return Point;
}());
;
var point = new Point();
point.x = 1; //Property
point.y = 1;
point.draw(); //Method
