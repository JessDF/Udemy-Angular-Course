import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
/* Two ways to mark as input property:
   * 1. Use the method when declaring variable: @Input() isFavorite: boolean
        Add Input to import
   * 2. Can add to the @Component meta-data: inputs: ['isFavorite']
        Problem with approach: using a 'magic' string and doesn't get renamed when we refactor it
        When you declare in the meta-data it is creating a field in the background
  */
@Component({
  selector: 'app-favorite',
  /*Two ways of using templates: externally or with the template property
    Which way you use is up to you
    Recommend:use external if complex or more than 5 lines
  */
  templateUrl: './favorite.component.html', //use if more complex, > 5 lines code
  //template: '<h1>Hello</h1>',
  /* Why don't the css leak outside of this component
   * Shadow DOM - Allows us to apply scoped styles to elements without bleeding out to the outer world.
  */
  styleUrls: ['./favorite.component.css'],
  /* ViewEncapsulation - 
   * Setting: Emulated - we emulate Shadow DOM - default setting
   *     Angular attaches an attirbute to our components and uses that to apply CSS to our component
   * Setting: Native - Instead of generating the attributes dynamically, angular uses the native shadow dom in the browser 
   *     You have to import Bootstrap into the components CSS if you want it to appear when you use this setting
   *        You wouldn't really want to do this as it'll cause performance issues
   * Setting: None - we aren't going to have view encapsulation
   *     Styles in this component will leak outside 
  */
  //encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    body {
      background-color: powderblue;
    }
    .glyphicon {
      color: green;
    }
    `]
  //inputs: ['isFavorite']
})
/* Three ways to add style to a component:
 * 1. Using the styleUrls property in the component method data
 * 2. Using the styles property in the component method
 *    You can use both 1 and 2
 * 3. Inline in our HTML file
 * 
 * Note - which ever comes last while be the one that applies
 *  Angular chooses whichever one comes last - glyphicon will be overriden
*/
export class FavoriteComponent {
  /*Alias in an Input Method:
    If we don't want to use camel case in HTML we can pass an alias and pass into the Input method
    Adding an alias keeps the contract of our components stable, as when we refactor the variable it doesn't get updated in the HTML
  */
  @Input('is-favorite') isSelected: boolean;
  //Can use alias on input and output to keep our componenets stable
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;

    /*Can optionally pass a value: this.change.emit(this.isSelected)
      Value passed in will be available to all subscribers of the change. In thic case: AppComponent
    */
    this.click.emit({newValue: this.isSelected}); //Use to raise or publish an event, notify others that something happened
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
