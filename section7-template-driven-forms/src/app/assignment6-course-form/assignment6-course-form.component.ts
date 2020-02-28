import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment6-course-form',
  templateUrl: './assignment6-course-form.component.html',
  styleUrls: ['./assignment6-course-form.component.css']
})
export class Assignment6CourseFormComponent {
  courseCategories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];
}
