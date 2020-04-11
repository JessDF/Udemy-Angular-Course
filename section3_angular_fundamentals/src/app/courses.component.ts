import {Component} from '@angular/core'; //Import component decorator to make our component
import { CoursesService } from './courses.service';

@Component({ //Add one or more properties to tell how this component works
    selector: 'courses', //<div class="courses">  following would be our selector ".courses"
    template: `
        <h2>{{ "Title: " + getTitle()}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    `
    //The template is the html template we want to render for this component
}) //Decorator function
//Anywhere you have this selector, angular is going to render the template

/* Note on string Interpolation: {{}}
    //we use {{}} to render something in our template dynamically, will be evaluated at run-time
    //If the value within {{}} changes later, the view will be automatically updated
*/
/* Directives: we use directive to manipulate the DOM (i.e. add, delete, modify the DOM)
    //when you use a directive to modify the structure of the DOM - you should prefix it with a *
    //Example: <li *ngFor="let course of courses"> {{course}} </li>
        //you want to write an expression similar to the for each code blocks
        // "let course" declares a variable called course and "of courses" is the field iterating over
*/

export class CoursesComponent { //Pascal Naming Convention - First letter of each word is in caps
    title = "List of courses";

    //In the real world we wouldn't hard code the list of courses, we would get them from the server (i.e. HTTP endpoint)
    // courses = ["course1", "course2", "course3"];
    //We have two objects: 
        //1. Adding logic in this class to call an HTTP service, but this would tightly couple the component to a live HTTP endpoint
        //2. Defining a seperate service class to get the list of courses from the HTTP service
    courses; //consuming the service to get the courses
    constructor(service: CoursesService) { //Angular will create an instance of our service and solves below. Decouples the dependency of the class
        // let service = new CoursesService(); //tightly couples this courses component with the service. What if constructor of CoursesService changes
        
        this.courses = service.getCourses();
    }
    

    getTitle() { //If we wanted a dynamic title could add logic here
        return this.title;
    }
}