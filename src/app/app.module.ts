import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Results } from './result.component';
import { Student } from './student.component';

@NgModule({
  declarations: [
    AppComponent,
    Student,
    Results
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
