//Simplification of class and object from previous lessons
class Point { //<- This point here is a Class
    x: number; //Fields - for storing data
    y: number;

    //constructor is a reserved keyword in typescript
    //TypeScript can only have one constructor unlike other programming languages
    constructor(x?: number, y?: number) {//Adding the '?' mark after x and y make it optional
        this.x = x;
        this.y = y;
    }

    draw() { //Method - don't need to pass anything b/c part of one unit
        console.log("Within Draw Method - " + "x:" + this.x + " - y:" + this.y);
    }
};

//Have 3 lines to initalize the new point object - so cleaner way would be to create a constructor
// let point = new Point(); //<- This point here is an Object
// point.x = 1;
// point.y = 3;

//Now need to supply the parameters when initalizing the Object b/c of constructor
let point = new Point(1, 2);
point.draw();
//If we want to initalize a point object w/out declaring the coordinators.
//Since we can only have 1 constructor - when we add 'x' in the method declaration we can make it optional
let secPoint = new Point();