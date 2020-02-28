import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment6CourseFormComponent } from './assignment6-course-form.component';

describe('Assignment6CourseFormComponent', () => {
  let component: Assignment6CourseFormComponent;
  let fixture: ComponentFixture<Assignment6CourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment6CourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment6CourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
