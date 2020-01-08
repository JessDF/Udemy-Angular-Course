export class Point { //export makes this file visiable outside of itself
    //Since it is exportable it is a module
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log("x:" + this.x + " - y:" + this.y);
    }
};