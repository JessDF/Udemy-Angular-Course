import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-traversal-operator',
  templateUrl: './safe-traversal-operator.component.html',
  styleUrls: ['./safe-traversal-operator.component.css']
})
export class SafeTraversalOperatorComponent {
  task = {
    title: 'Review Applications',
    assignee: null /*{
      name: 'John Smith'
    }*/
  }
}
