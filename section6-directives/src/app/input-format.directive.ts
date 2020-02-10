import { Directive, HostListener, ElementRef, Input } from '@angular/core';
/* HostListener - allows us to subscribe to the events raised from the DOM element that is hosting this directive
 *  i.e. DOM element that has this element
*/

@Directive({
  //If angular finds this attribute (in  []) on any element, it will apply this directive to that eleement
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;

 // ElementRef - Service defined in angular to give us access to the DOM object
 constructor(private el: ElementRef) { }

  //onFocus - when user click it
  // @HostListener('focus') onFocus() {
  //   console.log("On Focus");
  // }
  
  //onBlur - when user clicks off of it
  @HostListener('blur') onBlur() {
    console.log("On Blur");
    //nativeElement - give access to actual DOM object
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
