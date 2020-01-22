import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/* Two ways to mark as input property:
   * 1. Use the method when declaring variable: @Input() isFavorite: boolean
        Add Input to import
   * 2. Can add to the @Component meta-data: inputs: ['isFavorite']
        Problem with approach: using a 'magic' string and doesn't get renamed when we refactor it
        When you declare in the meta-data it is creating a field in the background
  */
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  //inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  /*Alias in an Input Method:
    If we don't want to use camel case in HTML we can pass an alias and pass into the Input method
    Adding an alias keeps the contract of our components stable, as when we refactor the variable it doesn't get updated in the HTML
  */
  @Input('is-favorite') isSelected: boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;

    /*Can optionally pass a value: this.change.emit(this.isSelected)
      Value passed in will be available to all subscribers of the change. In thic case: AppComponent
    */
    this.change.emit({newValue: this.isSelected}); //Use to raise or publish an event, notify others that something happened
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
