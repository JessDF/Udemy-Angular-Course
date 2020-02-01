import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeComponent } from './like/like.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    NgSwitchCaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
