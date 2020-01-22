import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { EmailService } from './email.service';

@NgModule({
  declarations: [ //Where we add all the components that are a part of this module
    AppComponent,
    CoursesComponent, //manually created component
    CourseComponent //generated and added w/ Angular CLI
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //Dependency injection - Injecting or providing the dependency of the class into the constructor
    //Register all the dependencies our components rely on: i.e. Courses Component on Courses Service
    CoursesService, //Angular creates a single instance of this for all components. This uses the Singleton Design Pattern
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
