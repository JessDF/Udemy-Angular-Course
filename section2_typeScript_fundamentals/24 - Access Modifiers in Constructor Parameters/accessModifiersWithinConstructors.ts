//Simplification of code from previous lessons
class Point {
    // private x: number;
    // private y: number;
    
    // //Below is a little redundant and TypeScript can let you do it with less code.
    // constructor(x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    
    //Below is a little redundant and TypeScript can let you do it with less code.
    constructor(private x?: number, private y?: number) {
        //By prefixing parameters with the access modifier and removing the two fields above
        //And if we do this the fields will be generated and initalized for us by the TypeScript compiler
        //Note - If done this way we do need to declare if the field is public
    }


    draw() { //Method
        console.log("x:" + this.x + " - y:" + this.y);
    }
};

let point = new Point(1, 2);
point.draw();