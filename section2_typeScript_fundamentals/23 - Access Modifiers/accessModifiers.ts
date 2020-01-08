//Simplification of code from previous lessons
//Access Modifiers: a keyword we can apply to a member of a class to control it's access outside of the class
//Three types: public, private, protected
//Type of public: accessible anywhere - is the default setting
//Type of private: only accessible within the class
class Point {
    private x: number; //Fields - for storing data
    private y: number;

    //constructor is a reserved keyword in typescript
    //TypeScript can only have one constructor unlike other programming languages
    constructor(x?: number, y?: number) {//Adding the '?' mark after x and y make it optional
        this.x = x;
        this.y = y;
    }

    draw() { //Method
        console.log("Within Draw Method - " + "x:" + this.x + " - y:" + this.y);
    }
};

let point = new Point(1, 2);
point.draw();