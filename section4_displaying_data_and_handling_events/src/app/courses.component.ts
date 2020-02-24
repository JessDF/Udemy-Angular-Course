import {Component} from '@angular/core';
/*DOM (Document Object Model) - module of objects that represent the structure of a document
    - a tree of objects in memory
HTML - is a markup language we use to represent DOM in text
    - browser parses a HTML document and creates a tree of objects that refer to as the DOM
Most attributes of HTML elements have 1 to 1 mapping to properties of DOM objects
    - There are a few exceptions (i.e. HTML to DOM: colspan in the <td> tag) (i.e. DOM to HTML: textContent in <h1> tag )
*/

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        Assignment 2: <span [class]="isActive ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)="onSave($event)"></span>
        Ans Assignment 2: <span class="glyphicon" [class.glyphicon-star]="isActive" [class.glyphicon-star-empty]="!isActive" (click)="onSave($event)"></span>
        <br>
        <div (click)="onDivClick()">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">
                BootStrap Btn
            </button>
        </div>
        <img [src]="imageUrl" [style.opacity]="isActive ? '1.0' : '0.0'"/><br><br>
        Using Template: <input #usersInput (keyup.enter)="onKeyUpTemplate(usersInput.value)" /><br>
        Obj Property binding: <input [value]="userInputObj" (keyup.enter)="userInputObj = $event.target.value; onKeyUp()" /><br>
        Obj 2-way binding: <input [(ngModel)]="userInputObj" (keyup.enter)="onKeyUp()" /><br>
        <table>
            <tr>
                <th [attr.colspan]="colSpan">Default Pipes</th>
            </tr>
            <tr>
                <td [attr.colspan]="colSpan">{{course.title | uppercase}}</td>
            </tr>
            <tr>
                <td [attr.colspan]="colSpan">{{course.students | number}}</td>
            </tr>
            <tr>
                <td [attr.colspan]="colSpan">{{course.rating | number:'1.2-2'}}</td>
            </tr>
            <tr>
                <td [attr.colspan]="colSpan">{{course.price | currency:'AUD':true:'3.2-2'}}</td>
            </tr>
            <tr>
                <td [attr.colspan]="colSpan">{{course.releaseDate | date:'shortDate'}}</td>
            </tr>
        </table>
        <h3>Custom Pipe </h3>
        Custom length: {{customPipe|summary:10}} <br>
        Default length: {{customPipe|summary}}
    `
})
/*Property Binding:
    we bind propertive DOM elements (like src) to a field or property in our component
    <img [src]="imageUrl" /> //when imageUrl field changes src will change
            //Interpolation works well for dynamic headings or renderng text
            //Property Binding is shorter in other cases
    Property Binding only works in one way from component to DOM
*/
/*Type: Class Binding:
    Ex: <button class="btn btn-primary" [class.active]="isActive">
        If the class binding (active class in this case) is true then the class will be added to the class attribute
        If the class binding is false then it won't be added
    Can be used to dynamically add classes to different tags
*/
/*Type: Style Binding: https://www.w3schools.com/jsref/dom_obj_style.asp
    Ex: <img [src]="imageUrl" [style.opacity]="isActive ? '1.0' : '0.0'"/>
        If active is true then set opacity of img to 1 (is visible)
        If active is false then set opacity of img to 0 (is hidden)
    Can use to dynamically add styles to different tags
*/
/* Type: Event Binding:
    Used to handle events raised from the DOM (i.e. key strokes, mouse movements, clicks)
    Ex: <button class="btn btn-primary" [class.active]="isActive" (click)="onSave()">BootStrap Btn</button><br>
        (click) is the event binding. When button is clicked, the function onSave() is called

    Event Bubbling:
        An event bubbles up the DOM Tree - inside to outside. See example of button inside div,
        The button function logged first and then the div logged:
            <div (click)="onDivClick()">
                <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">
                    BootStrap Btn
                </button>
            </div>
        This can be stopped with $event.stopPropagation()
            When added to the button function - it won't bubble up to the 
            
    Event Filtering:
        When a user presses and releases a key, the keyup event occurs, and Angular provides a corresponding DOM event object in the $event variable which this code passes as a parameter to the component's onKey() method.
        There are filterings we can add so that the keyup event will only occur when that key is released.
*/
/* Pipes - used to format data
    Built-in Pipes include: Uppercase, Lowercase, Decimal, Currency, Percent
        https://angular.io/guide/pipes
    We can also create custom pipes.
        Custom pipes need to be registered within the declarations of the module
*/
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = true;
    userInputObj = "me@example.com";
    course = {
        title: "The Complete Angular Course",
        rating: 4.91724,
        students: 30231,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    customPipe = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

    onSave($event) { //If you want to get access to event obj you have to add as parameter
        //$event object in this case is representing the DOM object
        $event.stopPropagation();
        console.log("Button was clicked. Event: ", $event);
        this.isActive = !this.isActive;
    }

    onDivClick() {
        console.log("Div was clicked.");
    }

    onKeyUpTemplate(usersInput) {
        //Only want to do it if user presses enter
        //Angular has a property that can be added to the event handler to filter when triggered
        // if($event.keyCode === 13) {
            /*$event.target.value -> will give us the value that was entered
                We can also ge the user input by declaring a variable (i.e. usersInput)
                    <input #usersInput (keyup.enter)="onKeyUp(usersInput.value)" />
                This is called procedural programming - and we are passing code around.
                    Would be better to create a property in our class.
            */
            console.log("ENTER was pressed. User entered: ", usersInput);
        // }
    }

    //Property binding is from component to the view so doesn't quite work for this case
    /*We want to use two way binding: <input [(ngModel)]="userInputObj" (keyup.enter)="onKeyUp()" />
        ngModel - directive to manipulate the DOM - used for implementing 2 way binding in Angular
    */
    onKeyUp(){
        console.log("ENTER was pressed. User input: ", this.userInputObj)
    }
}