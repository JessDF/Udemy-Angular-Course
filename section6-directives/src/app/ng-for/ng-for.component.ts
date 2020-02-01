import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  courses;

  /* Track by -
   * In demo explicitly loading these courses, in real world would do so automatically when enter page
   * Each time call this function we are loading a new / clean array
  */
 loadCourses(){
   this.courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];
 }
 //Uses same course objects (if don't change) - so not re-rendering them each time
 //If course objects have same id then it's all good
 //If you have a small dataset, you don't need to worry about this
 //If performance is slow you can use trackBy - or you have large data set
 trackCourse(index, course) {
   return course ? course.id : undefined;
 }

  /* Change Detection -
   * Angular has a Change Detection mechanism so when you click a button, a timer completes, or an AJAX request is done
   *    It will register a change to an object and render the change.
   *  Removes the corresponding list item in the DOM or Adds when the change is detected 
  */
  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  changeName(course) {
    course.name = 'UPDATED';
  }
}
