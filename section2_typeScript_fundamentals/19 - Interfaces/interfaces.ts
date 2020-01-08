let drawPoint = (x, y, z, a, b, c, d, e) => { // we want to avoid this
    // ... just want to focus on the signature of the function
}
//We only want to pass the items that are relevant so we can encapsulate them into objects
let newDrawPoint = (point)  => {
    //..
}
newDrawPoint({
    x: 1, //nothing is stopping us from passing string so we add in-line annotation
    y: 2
})
let inLineAnnot = (point: {x: number, y: number}) => {
    //THis is pretty verbose so a better way is to use an interface
}
//Interface: we are defining a shape of an object
//Interfaces are purely for declaration
interface Point { //Capatilization : Piscal Naming Convention
    x: number,
    y: number
};
let interFunc = (point: Point) => {
    //...
}