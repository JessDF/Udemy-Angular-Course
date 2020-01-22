//Ideally we would have the class within it's own file - see: Point.ts
//Our modules name is point - since we imported it we can use it
import {Point} from './point';

let point = new Point(1, 2);
point.draw();