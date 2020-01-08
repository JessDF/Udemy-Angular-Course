//Interface from previous lesson
// interface Point { 
//     x: number,
//     y: number,
//     draw: () => void; //don't need to pass anything b/c part of one unit
// };
//Interfaces can not implement a function - only declare them
// let drawPoint = (point: Point) => {
//     //...
// }

//To improve cohesion of this interface and the functions we create a class
//Class: Groups variables(properties) and functions(methods) that are highly related
//Cohsion: Things related should be one unit
class Point { 
    x: number; //Fields - for storing data
    y: number;
    draw() { //Method - don't need to pass anything b/c part of one unit
        //...
    }
    getDistance(anotherPoint: Point) {
        //...
    }
};
