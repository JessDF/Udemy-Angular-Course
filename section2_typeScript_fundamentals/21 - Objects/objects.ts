//Class from previous lesson
class Point { //<- This point here is a Class
    x: number; //Fields - for storing data
    y: number;

    draw() { //Method - don't need to pass anything b/c part of one unit
        //This.x and this.y is accessing the properties of the point object
        console.log("Within Draw Method - " + "x:" + this.x + " - y:" + this.y);
    }

    getDistance(anotherPoint: Point) {
        //...
    }
};

let point = new Point(); //<- This point here is an Object
point.x = 1; //Property
point.y = 3;
point.draw(); //Method