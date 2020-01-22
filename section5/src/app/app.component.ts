import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

/*Cleaning up: onFavoriteChanged(eventArgs: {newValue: boolean}){}
    We can do this by creating an interface and use instead of in-line annotation

interface FavoriteChangedEventArgs {
  //For re-usability we should export it in Favorite Component.
  //Moved to favorite.component.ts
  newValue: boolean
}
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){ //If dealing with complex data, may want to add type data
    console.log("Favorite changed - ", eventArgs);
  }
}
