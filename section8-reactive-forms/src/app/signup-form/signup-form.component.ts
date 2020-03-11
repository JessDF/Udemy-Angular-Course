import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  /* AbstractControl is the base class (parent) of FormControl and FormGroup
   * FormGroup and FormControl inherit functionality from it
   * The first argument of FormGroup is key-value pairs with value an instance of the class derived from AbstractControl class
   */
  form = new FormGroup({ //This is how we explicitly make FormGroup and FormControl objects
    username : new FormControl(),
    password : new FormControl()
  });

}
