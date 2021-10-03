import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { HighlightAnswerDirective } from './directives/highlight-answer.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    HighlightAnswerDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
