//Simplification of code from previous lessons
class Point {
    constructor(private _x?: number, private y?: number) {
    }

    draw() { //Method
        console.log("x:" + this.x + " - y:" + this.y);
    }
    //We can do the following functions via properties
    getX() { //Allows us to access the x value outside of the class
        return this.x;
    }

    setX(value: number) {
        if(value < 0) {
            throw new Error("Value can't be less than 0");
        }
        this.x = value;
    }
    //Properties of X: we can use X like a field
    //Used capital X b/c in TypeScript we use camel notation to name our fields
    //Camel Notation means: xField or testFunc
    //So using lower case X in thet getter/setter would clash
    //We can get away with this by prefixing our constructor variable with _ and then rename our getter/setter
    get x() { //This is called a getter
        return this.x;
    }

    set x(value: number) { //This is called a setter
        if(value < 0) {
            throw new Error("Value can't be less than 0");
        }
        this.x = value;
    }
    // get X() { //This is called a getter
    //     return this.x;
    // }

    // set X(value: number) { //This is called a setter
    //     if(value < 0) {
    //         throw new Error("Value can't be less than 0");
    //     }
    //     this.x = value;
    // }
};

let point = new Point(1, 2);
point.draw();
//Method
let x = point.getX();
point.setX(1);
point.draw();
//Properties
let pX = point.x; //Cleaner syntax this way
point.x = 5;
point.draw();